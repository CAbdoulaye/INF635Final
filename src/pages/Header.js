import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import './styles.css';
import { UserAuth } from '../components/context/AuthContext';

export default function Header() {
  const {logout} = UserAuth()
  const navigate = useNavigate()
  const handleLogOut = async() =>{
    try{
      await logout();
      navigate("/signIn");
      alert("Logged out")
    }
    catch(err){
      console.log(err)
    }
  }
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
          <li>
            <NavLink to="/SignIn">Sign In</NavLink>
          </li>
          <li>
            <NavLink to="/fillDatabase">Fill Database</NavLink>
          </li>
          <li>
            <NavLink to="/protected">Protected</NavLink>
          </li>
          <li>
            <NavLink onClick={handleLogOut}>Log Out</NavLink>
          </li>
          
          

        </ul>
      </nav>
    </div>
  )
}
