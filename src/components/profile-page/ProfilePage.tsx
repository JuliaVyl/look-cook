import Categories from '../categories/Categories'
import Profile from '../profile/Profile'
import UserRecipes from '../users-recipes/UserRecipes'
import './profile-page.scss'

const categories = [
  {id: 1, category: 'Profile'},
  {id: 2, category: 'My recipes'},
  {id: 3, category: 'Favorites'},
  {id: 4, category: 'Log out'}
]  

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Categories categories={categories}/>
      <Profile/>
      <UserRecipes />
    </div>
  );
}

export default ProfilePage;