/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
const createNewUser =(email,password)=>{
    setLoading(true) 
    return createUserWithEmailAndPassword(auth,email,password)
}

const userLogin=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const logout =()=>{
    return signOut(auth)
}
const updateUserProfile=(updatedData)=>{
    return updateProfile(auth.currentUser,updatedData)
}
useEffect(()=>{
    const unSubscribed=onAuthStateChanged(auth,currentUser=>{
        setLoading(false)
        setUser(currentUser)
        console.log(currentUser)
    })
    return ()=>{
        unSubscribed()
    }
},[])
    const authInfo={
        setUser,
        createNewUser,
        logout,
        user,
        userLogin,
        loading,
        updateUserProfile
    }
    return (
   <AuthContext.Provider value={authInfo }>
    {children}
   </AuthContext.Provider>
    );
};

export default AuthProvider;