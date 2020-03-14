import firebase from 'firebase';
import { firebaseAuth } from '@/firebase';

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const logout = () => {
  firebaseAuth.signOut();
};
