import Categories from '../categories/Categories';
import Profile from '../profile/Profile';
import UserRecipes from '../users-recipes/UserRecipes';
import './profile-page.scss';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Categories />
      <Profile />
      {/* <UserRecipes /> */}
    </div>
  );
};

export default ProfilePage;
