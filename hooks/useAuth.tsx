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

type IAuth = {
  user: User | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  error: Error | null;
  loading: boolean;
};

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logOut: async () => {},
  error: null,
  loading: false,
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();

  // to persist the user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        //logged in
        setUser(user);
        setLoading(false);
      } else {
        //not logged in
        setUser(null);
        setLoading(true);
        router.push('/login');
      }

      setInitialLoading(false);
    });
  }, [auth]);

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

  const logOut = async () => {
    setLoading(true);

    //signOut function from firebase that only accepts auth object and returns promise
    signOut(auth)
      .then(() => {
        //when user is signed out , modify the state to null
        setUser(null);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const memoizedValue = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      error,
      loading,
      logOut,
    }),
    [user, error, loading]
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
