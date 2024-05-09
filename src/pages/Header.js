import React from 'react'
import {NavLink} from 'react-router-dom'
import './styles.css';

export default function Header() {
  return (
    <div className='header'>
      <h1>Welcome To My Page</h1>
      <nav>
        <ul>
          <li>
            < NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
