import React, { useContext } from 'react'
import DatabaseContext from '../context/DatabaseContext'
import OrderContext from '../context/OrderContext'

export default function Order({order}) {

  const { FruitsDataList } = useContext(DatabaseContext);

  const { processOrder } = useContext(OrderContext)

  const orderItem = (FruitsDataList.filter((productItem) => {
    if(productItem.id === order.id)
      return productItem
  }))[0]
  console.log(order)

  const showOrder = () => {
    const myDiv = document.getElementById(order.id)
    if (myDiv.style.display == 'none')
      myDiv.style.display = 'block'
    else 
      myDiv.style.display = 'none'
  }

  const process = () => {
    processOrder(order)
  }

  return (
    <div className='task-item'>
      {/* <h3>Order #{orderItem.name}</h3> */}
      <div className='showOnCLick' id={order.id}>
      <p>{order.month}/{order.date}/{order.year}</p>
      <p>{order.name}</p>
      <p>{order.email}</p>
      </div>
      <p>Items:
      {order.shoppingCart.map((item) =>(
        <> {item.name} x {item.quantity} lb </>
      ))}</p>
      <p>${(order.total).toFixed(2)}</p>
      <button onClick={showOrder}>View Details</button>
      <button onClick={process}>Process Order</button>

    </div>
  )
}
