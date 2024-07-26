import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, getAuth } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../../firebase";
import { addDoc, collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { db } from '../../firebase'

const UserContext = createContext()

export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [admin, setAdmin] = useState(false)
  const [email, setEmail] = useState("a")

  const createUser = (name, email, password) =>{
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
      console.log(name)
      addUserToDB(name, email)
      setEmail(email)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  const signIn = (email, password) =>{
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user);
      console.log(user)
      const authen = getAuth();
      const currentuser = authen.currentUser;
      console.log(currentuser.uid)
      setEmail(email)


      if (email.endsWith("@mngr.com"))
        setAdmin(true);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }

  const logout = () => {
    setUser(null)
    setAdmin(false);
    return signOut(auth); 
  }

  const addUserToDB = async (name, email) => {
    // email will be uid
    console.log("trying to add user to DB")
    console.log(name)
    try{
      const docRef = await addDoc(collection(db, "Users"), {
        name: name,
        email: email,
        shoppingCart: [],
        total: 0
      })
      console.log("added " + name + " to database")
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }

  return (
    <UserContext.Provider value={{ createUser, signIn, logout, user, admin, email }}>
      {children}
    </UserContext.Provider>
  )
}
export const UserAuth = () =>{
  return useContext(UserContext);
}