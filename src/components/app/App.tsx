import FoodCategories from "../food-categories/FoodCategories";
import Navbar from "../navbar/Navbar"
import ProfilePage from "../profile-page/ProfilePage";
import Recipes from "../recipes-list/Recipes"
import UserRecipes from "../users-recipes/UserRecipes";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <FoodCategories />
      <Recipes /> */}

      <ProfilePage/>

    </>
  );
}

export default App;
