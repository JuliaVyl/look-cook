import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterRecipesByCategory } from '../../store/recipes/actions';

import './categories.scss';

import { food } from './food_data';

const FoodCategories: React.FC<{}> = () => {
  const [activeCategory, setCategory] = useState(food[0].category);

  const category = 'categories__item';
  const activeCat = category + ' categories__item_active';

  const dispatch = useDispatch();

  const categoryClass = (currentCategory: string) => {
    return currentCategory === activeCategory ? activeCat : category;
  };

  useEffect(() => {
    dispatch(filterRecipesByCategory(activeCategory));
  }, [dispatch, activeCategory]);

  return (
    <div className="categories">
      <ul className="categories__list">
        <li
          className={categoryClass(food[0].category)}
          onClick={() => setCategory(food[0].category)}
        >
          {food[0].category}
        </li>
        <li
          className={categoryClass(food[1].category)}
          onClick={() => setCategory(food[1].category)}
        >
          {food[1].category}
        </li>
        <li
          className={categoryClass(food[2].category)}
          onClick={() => setCategory(food[2].category)}
        >
          {food[2].category}
        </li>
        <li
          className={categoryClass(food[3].category)}
          onClick={() => setCategory(food[3].category)}
        >
          {food[3].category}
        </li>
        <li
          className={categoryClass(food[4].category)}
          onClick={() => setCategory(food[4].category)}
        >
          {food[4].category}
        </li>
        <li
          className={categoryClass(food[5].category)}
          onClick={() => setCategory(food[5].category)}
        >
          {food[5].category}
        </li>
        <li
          className={categoryClass(food[6].category)}
          onClick={() => setCategory(food[6].category)}
        >
          {food[6].category}
        </li>
        <li
          className={categoryClass(food[7].category)}
          onClick={() => setCategory(food[7].category)}
        >
          {food[7].category}
        </li>
      </ul>
    </div>
  );
};

export default FoodCategories;
