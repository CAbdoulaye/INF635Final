import React, {useContext} from 'react'
import ProductsContext from '../context/ProductsContext';
import CartItem from './CartItem';
import {Link} from 'react-router-dom'



export default function Cart() {
  const { cartList, total } = useContext(ProductsContext);
  // let myDiv = document.getElementById("cartDiv")
  // if (total == 0){
  //   console.log("is zero")
  //   myDiv.style.display = "none"
  // }
  // else {
  //   console.log("is not zero")
  //   myDiv.style.display = "block"
  // }
  return (
    <div id="cartDiv" >
      <h2>Cart:</h2>
      {cartList.map((cartItem => (
        <CartItem 
          key={cartItem.id}
          item={cartItem}
        />
      )))}
      <div>
        Cart Total: {total.toFixed(2)}
      </div>

        <label htmlFor="firstName">First Name:
          <input type="text" id="firstName" name="firstName" />
        </label>
        <label htmlFor="lastName">Last Name:
          <input type="text" id="lastName" name="lastName" />
        </label>
        <label htmlFor="email">Email:
          <input type="text" id="email" name="email" />
        </label>
        <label htmlFor="adress">Email:
          <input type="text" id="adress" name="adress" />
        </label>
        <label htmlFor="phone">Email:
          <input type="text" id="phone" name="phone" />
        </label>
        <div>
        <Link to="/thankYou"> 
          <button type="submit">Submit</button>
        </Link> 
        </div>
    </div>
  )
}
