/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
import toast from "react-hot-toast";

 export const AuthContext = createContext(null)

 const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser = (email, password) => {
        setLoading(true);
return createUserWithEmailAndPassword(auth,email,password)

    }


    const singIn = (email, password) => {
        
        return signInWithEmailAndPassword(auth, email, password);


    }


    const logOut = () => {
         setLoading(true);
 signOut(auth);
        return toast.error("User logged out successfully");
        
    }

 


    useEffect(() => {
        
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log(`user state changed`, currentUser);
            setUser(currentUser)
             setLoading(false);

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
      loading,
    };


    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;