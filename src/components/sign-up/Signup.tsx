import './signup.scss';

import closeIcon from '../../assets/icons/close.svg';
import firebase from 'firebase/app';
import 'firebase/auth';

interface Props {
  closePannel: () => void;
}

const Signup: React.FC<Props> = ({ closePannel }) => {
  const auth = firebase.auth();
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="signup">
      <div className="signup__close">
        <img src={closeIcon} alt="close" onClick={closePannel} />
      </div>
      {/* <input className="signup__password" type="email" autoComplete="off" placeholder="Email"></input>
      <input className="signup__password" type="password" autoComplete="off" placeholder="Enter password"></input>
      <input className="signup__password" type="password" autoComplete="off" placeholder="Repeat password"></input> */}
      <button className="signup__btn" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
    </div>
  );
};

export default Signup;
