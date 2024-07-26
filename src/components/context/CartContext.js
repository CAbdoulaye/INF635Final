import { db } from '../../firebase'
import { addDoc, updateDoc, deleteDoc, where, doc, collection, getDocs, getDoc, orderBy, query, limit } from "firebase/firestore";
import { createContext, useState, useEffect } from "react";

const DBCartContext = createContext()

export const CartContextProvider = ({children}) => {

  const [shoppingCartList, setShoppingCartList] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const setCart = async (email) => {
    console.log("trying to retrieve shopping cart")
    const queryRef = query(collection(db, 'Users'), where("email", "==", email));
    const querySnapshot = await getDocs(queryRef);
    if (!querySnapshot.empty) {
      const matchingDoc = querySnapshot.docs[0];
      const docRef = doc(db, 'Users', matchingDoc.id);
      const docSnapshot = await getDoc(docRef);
      const userData = docSnapshot.data();

      const shoppingCart = userData.shoppingCart;
      const shoppingcartTotal = userData.total;
      console.log(shoppingCart)
      setShoppingCartList(shoppingCart)
      setCartTotal(shoppingcartTotal)
    }
  }

  const saveCartToDB = async (cart, email, total) => {
    // email will be uid
    console.log("trying to save cart to DB")
    console.log(email)

    try{
      const queryRef = query(collection(db, 'Users'), where("email", "==", email));
      const querySnapshot = await getDocs(queryRef);
      if (!querySnapshot.empty) {
      const matchingDoc = querySnapshot.docs[0]
      const docRef = doc(db, 'Users', matchingDoc.id);
      await updateDoc(docRef, {
        shoppingCart: cart,
        total: total
      })
      console.log("added cart to database")
      }
      else 
      console.log("empty! should not be empty")
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }

  const checkOut = async (email) => {
    console.log("trying to retrieve shopping cart")
    const queryRef = query(collection(db, 'Users'), where("email", "==", email));
    const querySnapshot = await getDocs(queryRef);
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    if (!querySnapshot.empty) {
      const matchingDoc = querySnapshot.docs[0];
      const docRef = doc(db, 'Users', matchingDoc.id);
      const docSnapshot = await getDoc(docRef);
      const userData = docSnapshot.data();

      try{
        const docRef = await addDoc(collection(db, "Orders"), {
          name: userData.name,
          shoppingCart: userData.shoppingCart,
          total: userData.total,
          email: userData.email,
          month: month,
          year: year,
          date: date
        })
        console.log("added order to DB")
      }catch(err){
        console.log("Error: ")
        console.error(err)
      }
    }
  }

  return (
    <DBCartContext.Provider value={{ saveCartToDB, setCart, shoppingCartList, cartTotal, checkOut }}>
      {children}
    </DBCartContext.Provider>
  )
}

export default DBCartContext;