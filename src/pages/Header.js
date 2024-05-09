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
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}
