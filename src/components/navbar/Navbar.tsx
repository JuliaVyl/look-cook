import './navbar.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';

import searchIcon from '../../assets/icons/search.svg';
import { useState } from 'react';
import Signup from '../sign-up/Signup';
import { filterRecipesByText } from '../../store/recipes/actions';
import { useDispatch } from 'react-redux';

const Navbar: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const [value, setValue] = useState('');

  const [showSingIn, setSingIn] = useState(false);
  const [showSearchPannel, setSearchPannel] = useState(false);
  const [showSearch, setSearch] = useState(true);

  const dispatch = useDispatch();

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };
  const handleSearch = (e: any) => {
    e.preventDefault();
    dispatch(filterRecipesByText(value));
  };

  return (
    <div className="navbar">
      <nav className="navbar__wrapper">
        <p className="navbar__logo">Look and cook</p>
        <ul className="navbar__list">
          {!showSearchPannel && showSearch && (
            <li className="navbar__item">
              <div className="navbar__item-search">
                <img
                  className="navbar__item-search-ico"
                  src={searchIcon}
                  alt="search"
                  onClick={() => setSearchPannel(true)}
                />
              </div>
            </li>
          )}
          {showSearchPannel && showSearch && (
            <form onSubmit={handleSearch}>
              <input
                className="navbar__search-field"
                type="text"
                autoComplete="off"
                placeholder="Write dish"
                value={value}
                onChange={handleChange}
              ></input>
              <button className="navbar__search-btn">Search</button>
            </form>
          )}
          <li className="navbar__item">
            <Link
              className="navbar__item-link navbar__item-link_active"
              to="/"
              onClick={() => setSearch(true)}
            >
              Recipies
            </Link>
          </li>
          {user && (
            <li className="navbar__item" onClick={() => setSearch(false)}>
              <Link className="navbar__item-link" to="/profile">
                Profile
              </Link>
            </li>
          )}

          {!user && (
            <Link
              className="navbar__item-link"
              to="/signin"
              onClick={() => setSingIn(true)}
            >
              Sign In
            </Link>
          )}
        </ul>
        {showSingIn && <Signup closePannel={() => setSingIn(false)} />}
      </nav>
    </div>
  );
};

export default Navbar;
