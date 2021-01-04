import Categories from "../food-categories/FoodCategories"
import Navbar from "../navbar/Navbar"
import Recipes from "../recipes-list/Recipes"

const App = () => {
  return (
    <>
      <Navbar />
      <Categories />
      <Recipes />
    </>
  );
}

export default App;
