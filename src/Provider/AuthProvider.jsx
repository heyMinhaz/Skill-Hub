/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";

 export const AuthContext = createContext(null)

 const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    
    const createUser = (email, password) => {
        
return createUserWithEmailAndPassword(auth,email,password)

    }


    const singIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);


    }


    const logOut = () => {
        
        return signOut(auth);

    }


    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(`user state changed`, currentUser);
            setUser(currentUser)

        });
        return () => {
    
unSubscribe()

}


    },[])


    const authInfo = {
      user,
      createUser,
      logOut,
      singIn,
    };


    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;