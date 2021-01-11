import './signup.scss';

import closeIcon from '../../assets/icons/close.svg';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from 'react-router-dom';

interface Props {
  closePannel: () => void;
}

const Signup: React.FC<Props> = ({ closePannel }) => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="signup">
      <div className="signup__close">
        <img src={closeIcon} alt="close" onClick={closePannel} />
      </div>
      <button className="signup__btn" onClick={signInWithGoogle}>
        Sign In with Google
      </button>
      {user && <Redirect to="/look-cook" />}
    </div>
  );
};

export default Signup;
