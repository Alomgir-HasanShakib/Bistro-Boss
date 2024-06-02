import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export const AuthContext = createContext(null);
// social media login
const googleprovider = new GoogleAuthProvider();

const Authentication = ({ children }) => {
  const auth = getAuth(app);
  const [loader, setLoader] = useState(true);
  const axiosPublic = useAxiosPublic()
  // manage user
  const [user, setUser] = useState(null);

  // create user
  const createUser = (email, pass) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // login user
  const loginUser = (email, pass) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };
  // googleLogin
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleprovider);
  };

  // sign Out user

  const logOut = () => {
    setUser(null);
    setLoader(true);
    return signOut(auth);
  };

  // update profile

  const updateUserProfile = (name,email, photourl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photourl,
      email: email
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoader(false);
      console.log(user);
      const userInfo = {email: user?.email
      }
      if(user){
        // save jwt token 
        axiosPublic.post('/jwt', userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token', res.data.token)
          }
        })
      }else{
        // remove jwt token 
        localStorage.removeItem('access-token')
      }
      
    });

    return () => unSubscribe();
  }, []);

  const authInfo = {
    createUser,
    loader,
    loginUser,
    user,
    setUser,
    logOut,
    googleLogin,
    updateUserProfile,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
};

export default Authentication;
