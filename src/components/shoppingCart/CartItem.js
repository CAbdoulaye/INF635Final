import React, {useContext} from 'react'
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import DatabaseContext from '../context/DatabaseContext'


export default function CartItem({item}) {
  const { FruitsDataList, increaseCartItem, decreaseCartItem, removeCartItem, increaseTotal, decreaseTotal } = useContext(DatabaseContext);

  const cartItem = (FruitsDataList.filter((productItem) =>{
    if(productItem.id === item.id)
      return productItem
  }))[0]


  const increaseItem = () =>{
    increaseCartItem(cartItem.id);
    increaseTotal(cartItem.price);
  }
  const decreaseItem = () =>{
    decreaseCartItem(cartItem.id);
    decreaseTotal(cartItem.price);
  }
  const removeItem = () =>{
    removeCartItem(cartItem.id);
    decreaseTotal((cartItem.price * item.quantity).toFixed(2));
  }

  const imgURL = `/images/${cartItem.category}/${cartItem.imageURL}`; //Create Image URL Path

  return (
    <div className="cart-item-container">
            <div className="cart-item-image">
                <img src={imgURL} alt={cartItem.name} />
            </div>
            <div className="cart-item-details">
                <h2 className="cart-item-name">{cartItem.name}</h2>
                <p className="cart-item-price">${cartItem.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity} {cartItem.unit}</p>
                <p className="cart-item-price">Total: ${(cartItem.price * item.quantity).toFixed(2)}</p>
                <FaMinus onClick={decreaseItem}/>
                <FaPlus onClick={increaseItem}/>
                <br/>
                <FaTrashAlt onClick={removeItem}/>
            </div>
        </div>
  )

  
}
