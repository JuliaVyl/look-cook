import { Recipe } from '../../types';
import './add-recipe.scss';

interface Props {
  recipe?: Recipe;
}

const AddRecipe: React.FC<Props> = () => {
  return (
    <form className="add-form">
      <div className="add-form__inputs">
        <div className="add-form__left">
          <input
            className="add-form__title"
            type="text"
            placeholder="Title"
            required
          ></input>
          <input
            className="add-form__serves"
            type="number"
            placeholder="Serves"
            required
          ></input>
          <input
            className="add-form__time"
            type="number"
            min="5"
            placeholder="Time of cooking (mins)"
            required
          ></input>
          <select className="add-form__level" required>
            <option disabled>Choose level</option>
            <option>Easy</option>
            <option>Middle</option>
            <option>Difficult</option>
          </select>
        </div>
        <div className="add-form__right">
          <textarea
            className="add-form__desc"
            placeholder="Write your recipe informative..."
            required
          ></textarea>
        </div>
      </div>

      <button className="add-form__btn">Add recipe</button>
    </form>
  );
};

export default AddRecipe;
