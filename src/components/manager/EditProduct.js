import React, { useState, useContext } from 'react';
import DatabaseContext from '../context/DatabaseContext';

export default function EditProduct({ product }) {
  const imgURL = `/images/${product.category}/${product.imageURL}`;

  const { editProduct } = useContext(DatabaseContext);

  const SaveChanges = () => {
    editProduct(product.id, price, quantity)
    hideEditItem()
  }


  const showEditItem = () => {
    const myForm = document.getElementById("myForm"+product.name)
    myForm.style.display = "block"
    const details = document.getElementById("productDetails"+product.name)
    details.style.display = "none"
    const editBtn = document.getElementById("showEditButton"+product.name)
    editBtn.style.display = "none"
    const saveBtn = document.getElementById("saveChangesButton"+product.name)
    saveBtn.style.display = "block"
  }

  const hideEditItem = () => {
    const myForm = document.getElementById("myForm"+product.name)
    myForm.style.display = "none"
    const editBtn = document.getElementById("showEditButton"+product.name)
    editBtn.style.display = "block"
    const saveBtn = document.getElementById("saveChangesButton"+product.name)
    saveBtn.style.display = "none"
    const details = document.getElementById("productDetails"+product.name)
    details.style.display = "block"
  }

  const [price, setPrice] = useState(product.price)
  const [quantity, setQuantity] = useState(product.quantity)

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
            <div id={"productDetails"+product.name}>
              <p className="text-display">${price}/{product.unit}</p>
              <p className="text-display">Available: {quantity} {product.unit}</p>
            </div>
            <div>
            <form id={"myForm"+product.name} style={{display: "none"}}>
              <label>
                Price:
                <input type="text" name="price" value={price} onChange={e => setPrice(e.target.value)} placeholder="Enter Task Title"/>
              </label>
              <br />

              <label>
                Quantity:
                <input type="text" name="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
              </label>
              <br />
              </form>
            </div>
            <button id={"showEditButton"+product.name} onClick={showEditItem}>Edit</button>
            <button id={"saveChangesButton"+product.name} onClick={SaveChanges} style={{display: "none"}}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
