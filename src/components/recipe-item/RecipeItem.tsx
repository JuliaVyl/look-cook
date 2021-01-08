import './recipe-item.scss';

import favIcon from '../../assets/icons/favorite.svg';
import addFavIcon from '../../assets/icons/add-favorite.svg';

import { Recipe } from '../../store/recipes/types';
import { useEffect, useState } from 'react';
import {
  fetchAddFavorite,
  fetchDeleteFavorite,
  fetchShowAllFavorites,
} from '../../store/favorites/actions';
import { useDispatch, useSelector } from 'react-redux';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { RootState } from '../../store/types';

interface Props {
  recipe: Recipe;
  favorite: boolean;
}

const RecipeItem: React.FC<Props> = ({ recipe, favorite }) => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const dispatch = useDispatch();

  const addFavorite = (id: string): void => {
    dispatch(fetchAddFavorite(id, user.email));
  };

  const removeFavorite = (id: string): void => {
    dispatch(fetchDeleteFavorite(id, user.email));
  };

  return (
    <>
      <div className="recipe">
        <div className="recipe__cover">
          <img className="recipe__cover-img" src={recipe.image} alt="dish" />
        </div>
        {!favorite && (
          <div className="recipe__favorites">
            <img
              className="recipe__favorites-ico"
              src={addFavIcon}
              alt="favorite"
              onClick={() => addFavorite(recipe.id)}
            />
          </div>
        )}
        {favorite && (
          <div className="recipe__favorites">
            <img
              className="recipe__favorites-ico"
              src={favIcon}
              alt="favorite"
              onClick={() => removeFavorite(recipe.id)}
            />
          </div>
        )}
        <div className="recipe__description">
          <h1 className="recipe__title">{recipe.title}</h1>
          <div className="recipe__main-info">
            <p className="recipe__time">{recipe.time} min</p>
            <p className="recipe__serves">{recipe.serves} serves</p>
            <p className="recipe__level">Level - {recipe.level}</p>
          </div>
          <p className="recipe__text">{recipe.description}</p>
          <button className="recipe__btn">Show full recipe</button>
        </div>
      </div>
    </>
  );
};

export default RecipeItem;
