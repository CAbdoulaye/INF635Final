import React from 'react';
import './styles.css';
import ProductsContext from '../context/ProductsContext';

export default function Product({ product }) {
  const imageURL  = `../../images/${product.imageURL}`;
  console.log(imageURL)
  
  return (
    <div className="item-container">
      <div className="item-image">
        <img src={imageURL} alt={imageURL }/>
      </div>
      <div className="item-details">
          <h2 className="item-name">{product.name}</h2>
          <p className="item-description">{product.description}</p>
          <p className="item-category">{product.category}</p>
          <p className="item-price">{product.price}</p>
          <p className="item-quantity">Available: {product.quantity}</p>
      </div>
    </div>
  )
}