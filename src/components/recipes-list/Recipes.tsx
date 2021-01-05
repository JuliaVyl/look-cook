import RecipeItem from '../recipe-item/RecipeItem';
import './recipes.scss'

import { recipes } from './recipes_data'; 

const Recipes = () => {
  return (

    <div className="recipes">
      {/* {recipes.map(recipe => {
        return ( <RecipeItem />)
      })} */}

      <RecipeItem />
    </div>
  );
}

export default Recipes;