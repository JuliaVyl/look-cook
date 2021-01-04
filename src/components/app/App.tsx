import AddRecipe from "../add-recipe/AddRecipe";
import ChangePassword from "../change-password/ChangePassword";
import EditProfile from "../edit-profile/EditProfile";
import FoodCategories from "../food-categories/FoodCategories";
import Login from "../login/Login";
import Navbar from "../navbar/Navbar"
import ProfilePage from "../profile-page/ProfilePage";
import Recipes from "../recipes-list/Recipes"
import Signup from "../sign-up/Signip";
import UserRecipes from "../users-recipes/UserRecipes";

const App = () => {
  return (
    <>
      <Navbar />

      {/* <FoodCategories />
      <Recipes /> */}

      {/* <ProfilePage/> */}

      {/* <EditProfile /> */}

      {/* <ChangePassword /> */}

      <AddRecipe />
      {/* <Login /> */}
      <Signup />
    </>
  );
}

export default App;
