import '../recipes-list/recipes.scss';
// import './user-recipes.scss';

import UserRecipeItem from './UserRecipeItem';

const UserRecipes = () => {
  return (
    <div className="recipes">
      {/* <h1 className="recipes__text">You have no recipes yet.</h1>
      <button className="recipes__btn">Add recipe</button> */}
      <UserRecipeItem />
    </div>
  );
};

export default UserRecipes;
