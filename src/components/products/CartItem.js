import React, {useContext} from 'react'
import ProductsContext from '../context/ProductsContext';
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";


export default function CartItem({item}) {
  const { productList, increaseCartItem, decreaseCartItem, removeCartItem, increaseTotal, decreaseTotal } = useContext(ProductsContext);

  const cartItem = (productList.filter((productItem) =>{
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

  const imgURL = `/images/${cartItem.imageURL}`; //Create Image URL Path
  return (
    <div className="cart-item-container">
            <div className="cart-item-image">
                <img src={imgURL} alt={cartItem.name} />
            </div>
            <div className="cart-item-details">
                <h2 className="cart-item-name">{cartItem.name}</h2>
                <p className="cart-item-price">{cartItem.price}</p>
                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                <p className="cart-item-price">Total: {(cartItem.price * item.quantity).toFixed(2)}</p>
                <FaMinus onClick={decreaseItem}/>
                <FaPlus onClick={increaseItem}/>
                <br/>
                <FaTrashAlt onClick={removeItem}/>
            </div>
        </div>
  )

  
}
