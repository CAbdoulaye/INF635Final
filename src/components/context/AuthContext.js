import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../../firebase";

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(false)

  const createUser = (email, password) =>{
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  const signIn = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
      if(email === 'manager@gmail.com')
        setAdmin(true);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const logout = () =>{
    setUser(null)
    setAdmin(false);
    return signOut(auth); 
  }

  return (
    <UserContext.Provider value={{ createUser, signIn, logout, user, admin }}>
      {children}
    </UserContext.Provider>
  )
}
export const UserAuth = () =>{
  return useContext(UserContext);
}