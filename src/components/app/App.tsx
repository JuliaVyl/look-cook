import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLoaded } from '../../store/user/actions';

import AddRecipe from '../add-recipe/AddRecipe';
import FoodCategories from '../food-categories/FoodCategories';
import Navbar from '../navbar/Navbar';
import ProfilePage from '../profile-page/ProfilePage';
import Recipes from '../recipes-list/Recipes';
import UserRecipes from '../users-recipes/UserRecipes';
import Signup from '../sign-up/Signup';

const App: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(
        userLoaded({
          email: user.email,
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      );
    }
  }, [user]);

  return (
    <>
      <Navbar />

      {/* <FoodCategories />
      <Recipes /> */}

      {/* <ProfilePage /> */}

      {/* <AddRecipe /> */}
      {/* {user ? (
        <button onClick={() => auth.signOut()} id="sign-out">
          Sign Out
        </button>
      ) : (
        <Signup />
      )} */}
    </>
  );
};

export default App;
