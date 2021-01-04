import './profile.scss'

import img from '../../assets/profile-photo.jpg';
const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__cover"><img className="profile__cover-img" src={img} alt="avatar"/></div>
      <div className="profile__description">
        <div className="profile__descrition-info">
          <h1 className="profile__name">juliavyl</h1>
          <p className="profile__recipes">3 recipes</p>
          <button className="profile__btn profile__edit">Edit profile</button>
        </div>
        <div className="profile__add-recipe">
          <button className="profile__btn">Add recipe</button>
        </div>
        </div>
    </div>
  );
}

export default Profile;