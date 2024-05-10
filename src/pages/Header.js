import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import './styles.css';
import { UserAuth } from '../components/context/AuthContext';

export default function Header() {
  const {logout, user} = UserAuth()
  const navigate = useNavigate()
  const loggedIn = (user !== null) ? true : false;
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
  console.log(user)
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
            <NavLink to="/fill">Fill DB</NavLink>
          </li>
          <li>
            {loggedIn ?
              <NavLink onClick={handleLogOut}>Log Out</NavLink> :
              <NavLink to="/SignIn">Sign In</NavLink>
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}
