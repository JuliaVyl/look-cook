import './signup.scss';

import closeIcon from '../../assets/icons/close.svg';

const Signup: React.FC<{}> = () => {
  return (
    <form className="signup">
      <div className="signup__close"><img src={closeIcon} alt="close"/></div>
      <input className="signup__password" type="email" autoComplete="off" placeholder="Email"></input>
      <input className="signup__password" type="password" autoComplete="off" placeholder="Enter password"></input>
      <input className="signup__password" type="password" autoComplete="off" placeholder="Repeat password"></input>
      <button className="signup__btn">Sign up</button>
      
    </form>
  );
}

export default Signup;