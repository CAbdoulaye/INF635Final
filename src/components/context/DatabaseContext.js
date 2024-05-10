import { addDoc, collection, getDocs, orderBy, query, limit } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from '../../firebase'
import cartData from "../fruits/CartData"



const DBProductsContext = createContext()

export const ProductContextProvider = ({children}) => {

  const [FruitsDataList, setFruitsDataList] = useState([])

  const [total, setTotal] = useState(0);


  const [cartList, setCartList] = useState(cartData);

  useEffect(() => {
    const fetchTask = async () =>{
      try{
        const taskListRef = collection(db, "Products");
        const q = query(taskListRef, orderBy("category"), limit(50));
        const querySnapShot = await getDocs(q)
        const prdctList = querySnapShot.docs.map((doc) => {
            const dataWithId = doc.data();
            dataWithId.id = doc.id; // Merge the document ID into the data object
            return dataWithId;
          })
        console.log(prdctList)
        setFruitsDataList(prdctList)

      }
      catch(err){
        console.error(err)
      }
    }
    fetchTask();
  }, [1])

  const addToCart = (itemId) =>{
    let found = false;
    setCartList(cartList.map((cartItem) => {
      if (cartItem.id === itemId){
        cartItem.quantity++;
        found = true
      }
      return cartItem
    }))
    if (found == false) { // item is not on the list
      setCartList([...cartList, {id: itemId, quantity: 1}])
    }
  }

  const removeCartItem = (itemId) =>{
    setCartList(cartList.filter((cartItem) => 
      cartItem.id !==  itemId
    ))
  }

  const increaseTotal = (price) =>{
    setTotal(total + price)
  }

  const decreaseTotal = (price) =>{
    setTotal(total - price)
  }

  //increase item quantity in cart
  const increaseCartItem = (itemId) =>{
    setCartList(cartList.map((cartItem) => {
      if (cartItem.id === itemId){
        cartItem.quantity++;
      }
      return cartItem
    }))
  }
  const decreaseCartItem = (itemId) =>{
    setCartList(cartList.filter((cartItem) => {
      let onlyOneItemInCart = true;
      if (cartItem.id === itemId){
        if(cartItem.quantity > 1)
          cartItem.quantity--;
        else
          onlyOneItemInCart = false
      }
        return onlyOneItemInCart
    }))
  }

  const emptyCart = () =>{
    setCartList([])
    setTotal(0)
  }

  const addToDatabase = async (product) => {
    console.log("Trying to add to database")
    console.log(product)
    console.log(product.category)
    try{
      const docRef = await addDoc(collection(db, "Products"), {
        name: product.name,
        category: product.category,
        imageURL: product.imageURL,
        price: product.price,
        quantity: product.quantity,
        unit: product.unit
      })
      console.log("added " + product.name + " to database")
      setFruitsDataList(
        FruitsDataList.filter((fruit)=> fruit.id !== product.id)
      )
    }catch(err){
      console.log("Error: ")
      console.error(err)
    }
  }


  return (
    <DBProductsContext.Provider value={{ FruitsDataList, increaseTotal, addToCart, decreaseTotal, cartList, total, removeCartItem, increaseCartItem, decreaseCartItem, emptyCart, addToDatabase}}>
      {children}
    </DBProductsContext.Provider>
  )
}
export default DBProductsContext;
