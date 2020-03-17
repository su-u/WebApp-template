import React from 'react';
// import { Redirect } from 'react-router-dom';
import { firebaseAuth } from '@/firebase';

interface Props {
  children: React.ReactElement;
}

const AuthOnly: React.FC<Props> = (props: Props) => {
  const { children } = props;

  const [signedCheck, setSignedCheck] = React.useState(false);
  const [signedIn, setSignedIn] = React.useState(false);
  React.useEffect(() => {
    firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        setSignedCheck(true);
        setSignedIn(true);
      } else {
        setSignedCheck(true);
        setSignedIn(false);
      }
    });
  });

  return (
    <>
      state: {signedCheck}
      login: {signedIn}
      {signedIn ? <>{children}</> : <>out</>
      // <Redirect to="/" />
      }
    </>
  );
};

export default AuthOnly;
