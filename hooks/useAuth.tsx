import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';

import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { auth } from '../firebase';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  //
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  // an async sign up function that manages sign up of a new user
  const signUp = async (email: string, password: string) => {
    setLoading(true);
    //from firebase auth that returns a promise
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //this is a type of User, the type is from firebase
        setUser(userCredential.user);
        //from the login screen, after the user is logged in, we push the user into the main page
        router.push('/');
        //user is successfully logged in, then change the state
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      //even if there is an error, modify the loading state to false
      .finally(() => setLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);

        router.push('/');

        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  //
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export default useAuth;
