import React from 'react';

export default function EditProduct({ product }) {
  const imgURL = `/images/${product.category}/${product.imageURL}`;

  const deleteItem = () => {
  }

  const editItem = () => {
  }

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
            <p className="text-display">Available: {product.quantity} {product.unit}</p>
            <button onClick={deleteItem}>Delete Item</button>
            <button onClick={editItem}>Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
}
