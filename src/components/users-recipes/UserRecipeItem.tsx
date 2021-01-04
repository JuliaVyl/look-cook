import '../recipe-item/recipe-item.scss';

import dish from '../../assets/dish.jpg';

const UserRecipeItem = () => {
  return (
    <>
    <div className="recipe">
      <div className="recipe__cover"><img className="recipe__cover-img" src={dish} alt="dish"/></div>
      <div className="recipe__description">
        <h1 className="recipe__title">Fasff sdafsdfasdfsad sdafsdf</h1>
        <div className="recipe__main-info">
          <p className="recipe__time">35 min</p>
          <p className="recipe__serves">4 serves</p>
          <p className="recipe__level">Level - easy</p>
        </div>
        <p className="recipe__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores ducimus reprehenderit rem veritatis quae. Hic, omnis repellat. Architecto omnis error sed nihil consequatur commodi maxime nobis. Eius, quo pariatur.</p>
        <button className="recipe__btn">Edit</button>
        <button className="recipe__btn">Delete</button>
      </div>
    </div>
    <div className="recipe">
      <div className="recipe__cover"><img className="recipe__cover-img" src={dish} alt="dish"/></div>
      <div className="recipe__description">
        <h1 className="recipe__title">Fasff sdafsdfasdfsad sdafsdf</h1>
        <div className="recipe__main-info">
          <p className="recipe__time">35 min</p>
          <p className="recipe__serves">4 serves</p>
          <p className="recipe__level">Level - easy</p>
        </div>
        <p className="recipe__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores ducimus reprehenderit rem veritatis quae. Hic, omnis repellat. Architecto omnis error sed nihil consequatur commodi maxime nobis. Eius, quo pariatur.</p>
        <button className="recipe__btn">Edit</button>
        <button className="recipe__btn">Delete</button>
      </div>
    </div>
    </>
  );
}

export default UserRecipeItem;
