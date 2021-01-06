import { useState } from 'react';
import { ProfileCategory } from '../../types';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import './categories.scss';

import { Link } from 'react-router-dom';

const categories: ProfileCategory[] = [
  { id: 1, category: 'Profile' },
  { id: 2, category: 'My recipes' },
  { id: 3, category: 'Favorites' },
  { id: 4, category: 'Log out' },
];

const Categories: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);

  const [activeCategory, setCategory] = useState(categories[0].category);
  const category = 'categories__item';
  const activeCat = category + ' categories__item_active';

  const categoryClass = (currentCategory: string) => {
    return currentCategory === activeCategory ? activeCat : category;
  };

  return (
    <div className="categories">
      <ul className="categories__list">
        <li className={categoryClass(categories[0].category)}>
          <Link className="categories__link" to="/recipes">
            {categories[0].category}
          </Link>
        </li>
        <li className={categoryClass(categories[1].category)}>
          <Link className="categories__link" to="/myrecipes">
            {categories[1].category}
          </Link>
        </li>
        <li className={categoryClass(categories[2].category)}>
          <Link className="categories__link" to="/favorites">
            {categories[2].category}
          </Link>
        </li>
        <li className={categoryClass(categories[3].category)}>
          <Link
            className="categories__link"
            to="/recipes"
            onClick={() => auth.signOut()}
          >
            {categories[3].category}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
