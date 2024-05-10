import React, {useContext, useState} from 'react';
import DatabaseContext from '../context/DatabaseContext'

export default function Product({ product }) {

  const imgURL = `/images/${product.category}/${product.imageURL}`; 

  const [showButton, setShowButton] = useState(false)// show message when an item is added to cart
  const { addToCart, increaseTotal } = useContext(DatabaseContext);

  // Add item to cart
  const addItem = () =>{
    addToCart(product.id)
    increaseTotal(product.price);
    setShowButton(true);
    setTimeout(() => {
      setShowButton(false);
  }, 1000);
  }

  return (
    <div className="item-container">
      <div className="item-image">
        <img src={imgURL} alt={imgURL }/>
      </div>
      <div className="item-details">
          <h2 className="item-name">{product.name}</h2>
          <p className="item-description">{product.description}</p>
          <p className="item-price">${product.price}/{product.unit}</p>
          <p className="item-quantity">Available: {product.quantity} {product.unit}</p>
          {showButton ? (
              <>Added Item To Cart</>
            ) : (
              <button onClick={addItem}>Add To Cart</button>
            )}
      </div>
    </div>
  )
}