import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRecipes } from '../../store/recipes/actions';
import { RootState } from '../../store/types';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import RecipeItem from '../recipe-item/RecipeItem';
import FoodCategories from '../food-categories/FoodCategories';

import './recipes.scss';
import { fetchShowAllFavorites } from '../../store/favorites/actions';

const Recipes: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    if (user) dispatch(fetchShowAllFavorites(user.email));
  }, [user, dispatch]);

  let recipes = useSelector((state) => (state as RootState).recipes.recipes);

  const filterText = useSelector(
    (state) => (state as RootState).recipes.filterText
  );
  const filterCategory = useSelector(
    (state) => (state as RootState).recipes.filterCategory
  );

  recipes = useMemo(() => {
    if (filterText === '') return recipes;

    return recipes.filter((recipe) => {
      return recipe.title.trim().toLowerCase().includes(filterText);
    });
  }, [recipes, filterText]);

  recipes = useMemo(() => {
    if (filterCategory === 'All') return recipes;

    return recipes.filter((recipe) => {
      return recipe.category === filterCategory;
    });
  }, [recipes, filterCategory]);

  const favorites = useSelector(
    (state) => (state as RootState).favorites.favorites
  );

  return (
    <>
      <div className="recipes">
        {loading && <p className="recipes__loading">Loading...</p>}
        {recipes.map((recipe) => {
          let isFavorite = false;
          if (favorites.length) {
            favorites.forEach((favorite) => {
              if (favorite.favoriteId === recipe.id) isFavorite = true;
            });
          }
          return (
            <RecipeItem key={recipe.id} recipe={recipe} favorite={isFavorite} />
          );
        })}
      </div>
      <FoodCategories />
    </>
  );
};

export default Recipes;
