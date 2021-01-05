import './login.scss';

import closeIcon from '../../assets/icons/close.svg';

const Login = () => {
  return (
    <form className="login">
      <div className="login__close"><img src={closeIcon} alt="close"/></div>
      <input className="login__password" type="email" autoComplete="off" placeholder="Email"></input>
      <input className="login__password" type="password" autoComplete="off" placeholder="Password"></input>
      <button className="login__btn">Log in</button>
      
    </form>
  );
}

export default Login;