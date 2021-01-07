import './recipe-item.scss';

import favIcon from '../../assets/icons/favorite.svg';
import addFavIcon from '../../assets/icons/add-favorite.svg';

import { Recipe } from '../../store/recipes/types';
import { useState } from 'react';
import { fetchAddFavorite } from '../../store/favorites/actions';
import { useDispatch } from 'react-redux';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
  recipe: Recipe;
}

const RecipeItem: React.FC<Props> = ({ recipe }) => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const [favorite, setFavorite] = useState(false);
  const dispatch = useDispatch();

  const addFavorite = (id: string): void => {
    setFavorite(true);
    dispatch(fetchAddFavorite(id, user.email));
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
              onClick={() => setFavorite(false)}
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
