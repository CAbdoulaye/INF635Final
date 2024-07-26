import React, {useContext, useState} from 'react'
import DatabaseContext from '../context/DatabaseContext';


export default function ProductReport({ product }) {
  const { getPrice, productPrice } = useContext(DatabaseContext);
  const [price, setPrice] = useState(0)

  const updatePrice = async () => {
    setPrice(await (getPrice(product.id)))
  }
  updatePrice()

  

  return (
    <div className='task-item'>
      <h3>{product.name}</h3>
      <p>${price} x {product.quantity}</p>
      <p>Total ${(price * product.quantity).toFixed(2)}</p>
    </div>
  )
}
