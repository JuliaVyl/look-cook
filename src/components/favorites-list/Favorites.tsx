import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/types';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import RecipeItem from '../recipe-item/RecipeItem';

import '../recipes-list/recipes.scss';
import { fetchShowAllFavorites } from '../../store/favorites/actions';
import { fetchRecipes } from '../../store/recipes/actions';
import { Recipe } from '../../store/recipes/types';

const Favorites: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);

  const dispatch = useDispatch();

  const allRecipes = useSelector(
    (state) => (state as RootState).recipes.recipes
  );

  const favorites = useSelector(
    (state) => (state as RootState).favorites.favorites
  );

  let recipes: Recipe[] = [];

  useEffect(() => {
    dispatch(fetchShowAllFavorites(user.email));
    dispatch(fetchRecipes());
  }, [dispatch, user.email]);

  recipes = useMemo(
    () =>
      allRecipes.filter((rec) =>
        favorites.find((el) => rec.id === el.favoriteId)
      ),
    [allRecipes, favorites]
  );

  return (
    <div className="recipes">
      {loading && <p className="recipes__loading">Loading...</p>}
      {!recipes.length && (
        <p className="recipes__no-rec" style={{ fontSize: '22px' }}>
          You have no favorite recipes...
        </p>
      )}
      {recipes.map((recipe) => {
        return <RecipeItem key={recipe.id} recipe={recipe} favorite={true} />;
      })}
    </div>
  );
};

export default Favorites;
