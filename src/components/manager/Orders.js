import React, { useContext } from 'react'
import Order from './Order'
import './task.css';
import OrderContext from '../context/OrderContext';



export default function Orders() {

  const { orderList } = useContext(OrderContext);

  return (
    <div className='task-container'>
      <h1>Placed Orders</h1>
      {orderList.map((order) => (
        <Order key={order.id} order={order}/>
      ))}
    </div>
  )
}
