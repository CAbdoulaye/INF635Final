import React from 'react'
import OrdersData from './OrdersData'
import Order from './Order'
import './task.css';



export default function Orders() {
  return (
    <div className='order-container'>
      {OrdersData.map((order) => (
        <Order key={order.number} order={order}/>
      ))}
    </div>
  )
}
