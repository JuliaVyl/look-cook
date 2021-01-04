import './change-password.scss';

const ChangePassword = () => {
  return (
    <form className="edit-form">
      
      <input className="edit-form__password" type="password" autoComplete="off" placeholder="Old password"></input>
      <input className="edit-form__password" type="password" autoComplete="off" placeholder="New password"></input>
      <input className="edit-form__password" type="password" autoComplete="off" placeholder="Repeat password"></input>
      <button className="edit-form__btn">Change password</button>
      
    </form>
  );
}

export default ChangePassword;