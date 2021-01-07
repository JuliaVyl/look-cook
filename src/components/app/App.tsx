import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLoaded } from '../../store/user/actions';

import Navbar from '../navbar/Navbar';

const App: React.FC<{}> = () => {
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(
        userLoaded({
          email: user.email,
          name: user.displayName,
          photoUrl: user.photoURL,
        })
      );
    }
  }, [user, dispatch]);

  return (
    <>
      <Navbar />
    </>
  );
};

export default App;
