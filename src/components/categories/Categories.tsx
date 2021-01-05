import { FoodCategory } from '../../types';
import './categories.scss';

interface Props {
  categories: FoodCategory[];
}

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <div className="categories">
      <ul className="categories__list">
        {categories.map((category) => {
          return <li className="categories__item">{category.category}</li>;
        })}
      </ul>
    </div>
  );
};

export default Categories;
