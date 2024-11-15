/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
const createNewUser =(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const userLogin=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logout =()=>{
    return signOut(auth)
}
useEffect(()=>{
    const unSubscribed=onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
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
        userLogin
    }
    return (
   <AuthContext.Provider value={authInfo }>
    {children}
   </AuthContext.Provider>
    );
};

export default AuthProvider;