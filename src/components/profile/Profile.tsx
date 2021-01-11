import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/types';

import './profile.scss';

const Profile = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);

  const favorites = useSelector(
    (state) => (state as RootState).favorites.favorites
  );

  return (
    <div className="profile">
      {loading && <p className="profile__loading">Loading...</p>}
      {!loading && user && (
        <>
          <div className="profile__cover">
            <img
              className="profile__cover-img"
              src={user.photoURL}
              alt="avatar"
            />
          </div>
          <div className="profile__description">
            <div className="profile__descrition-info">
              <h1 className="profile__name">{user.displayName}</h1>
              {!favorites.length && (
                <p className="profile__recipes">Have no favorite recipes</p>
              )}
              {favorites.length === 1 && (
                <p className="profile__recipes">1 favorite recipe</p>
              )}
              {favorites.length > 1 && (
                <p className="profile__recipes">
                  {favorites.length} favorite recipes
                </p>
              )}
            </div>
            {/* <div className="profile__add-recipe">
            <button className="profile__btn">Add recipe</button>
          </div> */}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
