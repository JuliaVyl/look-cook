import './recipe-item.scss';

import favIcon from '../../assets/icons/favorite.svg';
import addFavIcon from '../../assets/icons/add-favorite.svg';

import { Recipe } from '../../store/recipes/types';
import React, { useState } from 'react';
import {
  fetchAddFavorite,
  fetchDeleteFavorite,
} from '../../store/favorites/actions';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/types';

import RecipeItemFull from '../recipe-item-more/RecipeItemFull';

interface Props {
  recipe: Recipe;
  favorite: boolean;
}

const RecipeItem: React.FC<Props> = ({ recipe, favorite }) => {
  const [showFullRecipe, setFullRecipe] = useState(false);
  const [alert, setAlert] = useState(false);
  
  const user = useSelector(
    (state) => (state as RootState).user.user
  );

  const dispatch = useDispatch();

  const addFavorite = (id: string): void => {
    if (user) dispatch(fetchAddFavorite(id, user.email));
  };

  const removeFavorite = (id: string): void => {
    if (user) dispatch(fetchDeleteFavorite(id, user.email));
  };
  const showRecipe = () => {
    setFullRecipe(true);
  }
  const showAlert = () => {
    setAlert(true);
    setTimeout(() => setAlert(false), 4000);
  }

  return (
    <>
      <div className="recipe">
        <div className="recipe__cover">
          <img className="recipe__cover-img" src={recipe.image} alt="dish" />
        </div>
        {!favorite && user && (
          <div className="recipe__favorites">
            <img
              className="recipe__favorites-ico"
              src={addFavIcon}
              alt="favorite"
              onClick={() => addFavorite(recipe.id)}
            />
          </div>
        )}
        {!user && (
          <div className="recipe__favorites">
            <img
              className="recipe__favorites-ico"
              src={addFavIcon}
              alt="favorite"
              onClick={() => showAlert()}
            />
            {alert && <p className="recipe__alert">You need to authorize to add favorites</p>}
          </div>
        )}
        {favorite && user && (
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
          <button className="recipe__btn" onClick={() => showRecipe()}>
            Show full recipe
          </button>
        </div>
        {showFullRecipe && (
          <RecipeItemFull
            recipe={recipe}
            closeFullRecipe={() => setFullRecipe(false)}
          />
        )}
      </div>
    </>
  );
};

export default RecipeItem;
