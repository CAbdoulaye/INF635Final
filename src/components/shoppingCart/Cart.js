import React, {useContext} from 'react'
import DatabaseContext from '../context/DatabaseContext';
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


export default function Cart() {
  const { cartList, total, emptyCart } = useContext(DatabaseContext);
  const { user } = UserAuth();
  

  const loggedIn = (user !== null) ? true : false;
  const navigate = useNavigate()

  console.log(cartList)

  const handleCheckOut = () => {
    if (!loggedIn){
      alert("Please Log In To Place Order")
      navigate("/signIn")
    }
    else{
    navigate("/thankYou")
    emptyCart()
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
        <button onClick={handleCheckOut} type="submit">Check Out</button>
      </div>
    </div>
  )
}
