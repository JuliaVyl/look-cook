import firebase from 'firebase/app';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLoaded } from '../../store/user/actions';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from '../navbar/Navbar';
import ProfilePage from '../profile-page/ProfilePage';
import Recipes from '../recipes-list/Recipes';
import Signup from '../sign-up/Signup';

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
      <Router>
        <Navbar />
        <Switch>
          <Route path="/look-cook/profile" component={ProfilePage} exact />
          <Route path="/look-cook/signin" component={Signup} exact />
          <Route path="/look-cook" component={Recipes} exact />
        </Switch>
      </Router>
    </>
  );
};

export default App;
