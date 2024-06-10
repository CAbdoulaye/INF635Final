import { db } from '../../firebase'
import { addDoc, deleteDoc, doc, collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

const DBCustomerContext = createContext()

export const CustomerContextProvider = ({children}) => {

  const addUserToDB = async (name, email) => {
    // email will be uid
    console.log("trying to add user to DB")
    console.log(name)
    try{
      const docRef = await addDoc(collection(db, "Users"), {
        name: name,
        email: email,
        shoppingCart: []
      })
      console.log("added " + name + " to database")
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }

  return (
    <DBCustomerContext.Provider value={{ addUserToDB }}>
      {children}
    </DBCustomerContext.Provider>
  )
}

export default DBCustomerContext;