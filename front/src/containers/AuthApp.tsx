import React from 'react';
import firebase from 'firebase';
import { firebaseAuth } from '@/firebase';

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
      <div className="App">
        <p className="App-intro">UID: {user && user.uid}</p>

        {user ? (
          <button onClick={logout}>Google Logout</button>
        ) : (
          <button onClick={login}>Google Login</button>
        )}
      </div>
    </>
  );
};

export default AuthApp;
