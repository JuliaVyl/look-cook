import './recipe-item-more.scss';

import closeIcon from '../../assets/icons/close.svg';

import { Recipe } from '../../store/recipes/types';

interface Props {
  recipe: Recipe;
  closeFullRecipe: () => void;
}

const RecipeItemFull: React.FC<Props> = ({ recipe, closeFullRecipe }) => {
  return (
    <>
      <div className="bg-items"></div>
      <div className="full-recipe">
        <div className="signup__close">
          <img src={closeIcon} alt="close" onClick={() => closeFullRecipe()} />
        </div>
        
        <div className="full-recipe__header">
          <div className="full-recipe__cover">
            <img
              className="full-recipe__cover-img"
              src={recipe.image}
              alt="dish"
            />
          </div>
          <div className="full-recipe__about">
            <h1 className="full-recipe__title">{recipe.title}</h1>
            <div className="full-recipe__main-info">
              <p className="full-recipe__time">{recipe.time} min</p>
              <p className="full-recipe__serves">{recipe.serves} serves</p>
              <p className="full-recipe__level">Level - {recipe.level}</p>
            </div>
          </div>
        </div>
        <p className="full-recipe__description">{recipe.description}</p>
        
      </div>
    </>
  );
};

export default RecipeItemFull;
