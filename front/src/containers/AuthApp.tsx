import React from 'react';
import firebase from 'firebase';
import { firebaseAuth } from '@/firebase';
import Button from '@material-ui/core/Button';
import ButtonAppBar from '@/components/Header/NavBar';


const AuthApp = () => {
  const [user, setUser] = React.useState<firebase.User | null>(null);

  React.useEffect(() => {
    firebaseAuth.onAuthStateChanged(user => {
      setUser(user);
    });
  });

  const login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebaseAuth.signInWithRedirect(provider);
  };

  const logout = () => {
    firebaseAuth.signOut();
  };

  return (
    <>
      <ButtonAppBar title="AuthApp" />
      <div className="App">
        <p className="App-intro">UID: {user && user.uid}</p>

        {user ? (
          <Button variant="contained" color="secondary" onClick={logout}>
            Google Logout
          </Button>
        ) : (
          <Button variant="contained" onClick={login}>
            Google Login
          </Button>
        )}
      </div>
    </>
  );
};

export default AuthApp;
