import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

import './profile.scss';

const Profile = () => {
  const auth = firebase.auth();
  const [user, loading] = useAuthState(auth);

  return (
    <div className="profile">
      {loading && <p className="profile__loading">Loading...</p>}
      {!loading && (
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
              <p className="profile__recipes">3 favorite recipes</p>
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
