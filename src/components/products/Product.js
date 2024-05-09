import React, {useContext} from 'react';
import ProductsContext from '../context/ProductsContext';

export default function Product({ product }) {
  const imgURL = `/images/${product.imageURL}`; //Create Image URL Path

  const { addToCart, increaseTotal } = useContext(ProductsContext);

  const addItem = () =>{
    addToCart(product.id)
    increaseTotal(product.price);
  }
  
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={imgURL} alt={imgURL }/>
      </div>
      <div className="item-details">
          <h2 className="item-name">{product.name}</h2>
          <p className="item-description">{product.description}</p>
          <p className="item-category">{product.category}</p>
          <p className="item-price">{product.price}</p>
          <p className="item-quantity">Available: {product.quantity}</p>
          <button onClick={addItem}>Add To Cart</button>
      </div>
    </div>
  )
}

