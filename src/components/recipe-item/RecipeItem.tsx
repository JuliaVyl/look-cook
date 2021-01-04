import './recipe-item.scss'

import dish from '../../assets/dish.jpg';
import favIcon from '../../assets/icons/favorite.svg';
import addFavIcon from '../../assets/icons/add-favorite.svg';

const RecipeItem = () => {
  return (
    <>
    <div className="recipe">
      <div className="recipe__cover"><img className="recipe__cover-img" src={dish} alt="dish"/></div>
      <div className="recipe__favorites"><img className="recipe__favorites-ico" src={favIcon} alt="dish"/></div>
      <div className="recipe__description">
        <h1 className="recipe__title">Fasff sdafsdfasdfsad sdafsdf</h1>
        <div className="recipe__main-info">
          <p className="recipe__time">35 min</p>
          <p className="recipe__serves">4 serves</p>
          <p className="recipe__level">Level - easy</p>
        </div>
        <p className="recipe__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores ducimus reprehenderit rem veritatis quae. Hic, omnis repellat. Architecto omnis error sed nihil consequatur commodi maxime nobis. Eius, quo pariatur.</p>
        <button className="recipe__btn">Show full recipe</button>
      </div>
    </div>
    <div className="recipe">
      <div className="recipe__cover"><img className="recipe__cover-img" src={dish} alt="dish"/></div>
      <div className="recipe__favorites"><img className="recipe__favorites-ico" src={addFavIcon} alt="dish"/></div>
      <div className="recipe__description">
        <h1 className="recipe__title">Fasff sdafsdfasdfsad sdafsdf</h1>
        <div className="recipe__main-info">
          <p className="recipe__time">35 min</p>
          <p className="recipe__serves">4 serves</p>
          <p className="recipe__level">Level - easy</p>
        </div>
        <p className="recipe__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque maiores ducimus reprehenderit rem veritatis quae. Hic, omnis repellat. Architecto omnis error sed nihil consequatur commodi maxime nobis. Eius, quo pariatur.</p>
        <button className="recipe__btn">Show full recipe</button>
      </div>
    </div>
    </>
  );
}

export default RecipeItem;