import { useState, createContext } from "react";
import productsData from "../products/ProductsData"
import cartData from "../products/CartData"

//import productsData from "../Task/ProductsData"

const ProductsContext = createContext();


//addToCart


export const ProductsProvider = ({children}) => {
  const [productList, setProductList] = useState(productsData);

  const [cartList, setCartList] = useState(cartData);
  const [total, setTotal] = useState(0);

  const [showAddedToCartMessage, setShowAddedToCartMessage] = useState(false);


  //add item to cart
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

    // const showAddedToCartMessage = document.getElementById("showAddedToCartMessage");
    // showAddedToCartMessage.style.display = "block";
    // setTimeout(() => {
    //   console.log("Added to Cart");
    // }, 2000);
    // showAddedToCartMessage.style.display = "none";

    setShowAddedToCartMessage(true);

    setTimeout(() => {
        setShowAddedToCartMessage(false);
    }, 2000);

  };



  const removeCartItem = (itemId) =>{
    setCartList(cartList.filter((cartItem) => 
      cartItem.id !==  itemId
    ))
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

  //decrease item quantity in cart
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

  const increaseTotal = (price) =>{
    setTotal(total + price)
  }
  const decreaseTotal = (price) =>{
    setTotal(total - price)
  }

  
  return(<ProductsContext.Provider value={{productList, cartList, addToCart, increaseCartItem, decreaseCartItem, removeCartItem, increaseTotal, decreaseTotal, total, showAddedToCartMessage}}>{children}</ProductsContext.Provider>)
}

export default ProductsContext;