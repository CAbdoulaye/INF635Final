import React, {useContext} from 'react'
import DatabaseContext from '../context/DatabaseContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom'; 
import { UserAuth } from '../context/AuthContext';
import  CartContext  from '../context/CartContext';


export default function Cart() {
  const { cartList, setCartList, total, emptyCart, setTotal } = useContext(DatabaseContext);
  const { saveCartToDB, setCart, shoppingCartList, cartTotal, checkOut } = useContext(CartContext);
  const { user, email } = UserAuth();  

  const loggedIn = (user !== null) ? true : false;
  const navigate = useNavigate()

  console.log(cartList)

  const saveCart = () => {
    console.log("save cart to ")
    console.log(email)
    saveCartToDB(cartList, email, total)
  }

  const setShoppingCart = () => {
    setCart(email)
    setCartList(shoppingCartList)
    setTotal(cartTotal)
  }

  const handleCheckOut = () => {
    if (!loggedIn){
      alert("Please Log In To Place Order")
      navigate("/signIn")
    }
    else{
      saveCart()
      checkOut(email)
      navigate("/thankYou")
      emptyCart()
      saveCart()
    }
  }
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
        Cart Total: ${total.toFixed(2)}
      </div>

      <div>
        <button onClick={saveCart} type="submit">Save Cart</button>
      </div>
      <div>
        <button onClick={setShoppingCart} type="submit">Load Cart</button>
      </div>
      <div>
        <button onClick={handleCheckOut} type="submit">Check Out</button>
      </div>
    </div>
  )
}
