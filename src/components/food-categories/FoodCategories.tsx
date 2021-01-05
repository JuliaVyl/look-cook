import './categories.scss';

import { food } from './food_data';

const FoodCategories: React.FC<{}> = () => {
  return (
    <div className="categories">
      <ul className="categories__list">
        {food.map((category) => {
          return <li className="categories__item">{category.category}</li>;
        })}
      </ul>
    </div>

    // <div className="categories">
    //   <ul className="categories__list">
    //     <li className="categories__item categories__item_active">allflf</li>
    //     <li className="categories__item">llflf</li>
    //   </ul>
    // </div>
  );
};

export default FoodCategories;
