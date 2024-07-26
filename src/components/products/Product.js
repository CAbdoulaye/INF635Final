import React, { useContext, useState } from 'react';
import DatabaseContext from '../context/DatabaseContext';

export default function Product({ product }) {
  const imgURL = `/images/${product.category}/${product.imageURL}`;
  const [showButton, setShowButton] = useState(false);
  const { addToCart, increaseTotal } = useContext(DatabaseContext);

  // Add item to cart
  const addItem = () => {
    addToCart(product.id, product.name, product.price);
    increaseTotal(product.price);
    setShowButton(true);
    setTimeout(() => {
      setShowButton(false);
    }, 1000);
  };

  return (
    <div className="card">
      <div className="row">
        <div className="col">
          <div className="item-image">
            <img src={imgURL} alt={imgURL} />
          </div>
        </div>
        <div className="col">
          <div className="item-details">
            <h2 className="text-display">{product.name}</h2>
            <p className="text-display">{product.description}</p>
            <p className="text-display">${product.price}/{product.unit}</p>
            {product.quantity > 0 ? ( 
              <p className="text-display">Available: {product.quantity} {product.unit}</p>
            ) : (
              <p className="text-display">Unavailable</p>
            ) }
            {showButton ? (
              <p className="text-display">Added Item To Cart</p>
            ) : (
              <button className="btn" onClick={addItem}>Add To Cart</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
