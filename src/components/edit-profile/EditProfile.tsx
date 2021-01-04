import './edit-profile.scss'

const EditProfile = () => {
  return (
    <form className="edit-form">
      
      <input className="edit-form__name" type="text" autoComplete="off" placeholder="name"></input>
      <input className="edit-form__photo" type="file"/>
      <button className="edit-form__btn edit-form__btn_save">Save changes</button>
      <button className="edit-form__btn">Change password</button>
      
    </form>
  );
}

export default EditProfile;