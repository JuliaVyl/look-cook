import './navbar.scss'

import searchIcon from '../../assets/icons/search.svg';

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar__wrapper">
        <p className="navbar__logo">Look and cook</p>
        <ul className="navbar__list">
          <li className="navbar__item">
            <div className="navbar__item-search">
              <img className="navbar__item-search-ico" src={searchIcon} alt=""/>
            </div>
          </li>
          <li className="navbar__item"><a className="navbar__item-link navbar__item-link_active" href="/">Recipies</a></li>
          <li className="navbar__item"><a className="navbar__item-link" href="/">Profile</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;