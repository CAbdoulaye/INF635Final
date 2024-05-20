import React from 'react'

export default function Order({order}) {
  const showOrder = () =>{
    const myDiv = document.getElementById(order.number)
    if (myDiv.style.display == 'none')
      myDiv.style.display = 'block'
    else 
      myDiv.style.display = 'none'
  }
  return (
    <div className='order-item'>
      <h3>Order #{order.number}</h3>
      <div className='showOnCLick' id={order.number}>
      <p>{order.customerName}</p>
      <p>{order.customerPhone}</p>
      <p>{order.customerAddress}</p>
      </div>
      <p>Items:
      {order.items.map((item) =>(
        <> {item.name} x {item.quantity} {item.unit}, </>
      ))}</p>
      <p>{order.total}</p>
      <button onClick={showOrder}>View Details</button>
      <button>Process Order</button>

    </div>
  )
}
