import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchRecipes } from '../../store/recipes/actions';
import { RootState } from '../../store/types';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import RecipeItem from '../recipe-item/RecipeItem';

import './recipes.scss';

const Recipes: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [, loading] = useAuthState(auth);

  const dispatch = useDispatch();

  const recipes = useSelector((state) => (state as RootState).recipes.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="recipes">
      {loading && <p className="recipes__loading">Loading...</p>}
      {recipes.map((recipe) => {
        return <RecipeItem key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default Recipes;
