import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ProfileCategory } from '../../types';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import './categories.scss';

import { fetchRecipes } from '../../store/recipes/actions';

import { Redirect } from 'react-router-dom';
import Profile from '../profile/Profile';
import Favorites from '../favorites-list/Favorites';

const categories: ProfileCategory[] = [
  { id: 1, category: 'Profile' },
  { id: 2, category: 'My recipes' },
  { id: 3, category: 'Favorites' },
  { id: 4, category: 'Log out' },
];

const Categories: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) dispatch(fetchRecipes());
  }, [user])

  const [activeCategory, setCategory] = useState(categories[0].category);

  const category = 'categories__item';
  const activeCat = category + ' categories__item_active';

  const categoryClass = (currentCategory: string) => {
    return currentCategory === activeCategory ? activeCat : category;
  };

  return (
    <>
      <div className="categories">
        <ul className="categories__list">
          <li
            className={categoryClass(categories[0].category)}
            onClick={() => setCategory(categories[0].category)}
          >
            {categories[0].category}
          </li>
          <li
            className={categoryClass(categories[2].category)}
            onClick={() => setCategory(categories[2].category)}
          >
            {categories[2].category}
          </li>
          <li
            className={categoryClass(categories[3].category)}
            onClick={() => {
              auth.signOut();
            }}
          >
            {categories[3].category}
          </li>
        </ul>
        {!user && !loading && <Redirect to="/" />}
      </div>

      {activeCategory === 'Profile' && <Profile />}
      {activeCategory === 'Favorites' && <Favorites />}
    </>
  );
};

export default Categories;
