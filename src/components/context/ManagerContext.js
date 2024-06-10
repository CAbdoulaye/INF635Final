import { db } from '../../firebase'
import { addDoc, deleteDoc, doc, collection, getDocs, where, orderBy, query, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

const DBManagerContext = createContext()

export const ManagerContextProvider = ({children}) => {

  const [manager, setManager] = useState({})
  
  const getManagerByEmail = async (email) => {
    console.log("Trying to get Manager")
    try{
      const q = query(collection(db, "Managers"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const mngr = querySnapshot.docs[0].data();
        console.log(mngr)
        setManager(mngr)
      }
      else
        console.log("error epmty(should not be empty)")
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }


  return (
    <DBManagerContext.Provider value={{ manager, getManagerByEmail }}>
      {children}
    </DBManagerContext.Provider>
  )
}

export default DBManagerContext;