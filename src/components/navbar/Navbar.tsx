import './navbar.scss';

import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Link } from 'react-router-dom';

import searchIcon from '../../assets/icons/search.svg';
import { useState } from 'react';
import Signup from '../sign-up/Signup';

const Navbar: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);

  const [showSingIn, setSingIn] = useState(false);
  const [showSearchPannel, setSearch] = useState(false);

  return (
    <div className="navbar">
      <nav className="navbar__wrapper">
        <p className="navbar__logo">Look and cook</p>
        <ul className="navbar__list">
          {!showSearchPannel && (
            <li className="navbar__item">
              <div className="navbar__item-search">
                <img
                  className="navbar__item-search-ico"
                  src={searchIcon}
                  alt="search"
                  onClick={() => setSearch(true)}
                />
              </div>
            </li>
          )}
          {showSearchPannel && (
            <div>
              <input
                className="navbar__search-field"
                type="text"
                autoComplete="off"
                placeholder="Write dish"
              ></input>
              <button className="navbar__search-btn">Search</button>
            </div>
          )}
          <li className="navbar__item">
            <Link
              className="navbar__item-link navbar__item-link_active"
              to="/recipes"
            >
              Recipies
            </Link>
          </li>
          {user && (
            <li className="navbar__item">
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
