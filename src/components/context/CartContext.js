import { db } from '../../firebase'
import { addDoc, deleteDoc, doc, collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

const DBCartContext = createContext()

export const CartContextProvider = ({children}) => {

  const addCartToDB = async (cart, email, name) => {
    // email will be uid
    console.log("trying to add user to DB")
    console.log(name)
    try{
      const docRef = await addDoc(collection(db, "Users"), {
        name: name,
        email: email,
        shoppingCart: cart
      })
      console.log("added " + name + " to database")
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }

  return (
    <DBCartContext.Provider value={{ }}>
      {children}
    </DBCartContext.Provider>
  )
}

export default DBCartContext;