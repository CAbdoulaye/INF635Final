import React, {useContext, useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import './styles.css';
import { UserAuth } from '../components/context/AuthContext';
import ManagerContext from '../components/context/ManagerContext';

export default function Header() {
  const {logout, user, admin} = UserAuth()
  const { manager, getManagerByEmail } = useContext(ManagerContext)

  const navigate = useNavigate()
  const employee = false
  const loggedIn = (user !== null) ? true : false;
  const [managerInterface, setManagerInterface] = useState(false)

  const handleLogOut = async () =>{
    try{
      await logout();
      navigate("/signIn");
      alert("Logged out")
      setManagerInterface(false)
    }
    catch(err){
      console.log(err)
    }
  }

const showManagerHeader = () => {
  getManagerByEmail(user.email)
  setManagerInterface(true)
}

  if (managerInterface){
  return (
    <div className='header'>
      <h1>Welcome Back {manager.name}</h1>
      <nav>
        <ul>
          <li>
            < NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/edit">Edit-Products</NavLink>
          </li>
          <li>
            <NavLink to="/employees">Employees</NavLink>
          </li>
          <li>
            <NavLink to="/tasks">Tasks</NavLink>
          </li>
          <li>
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li>
            <NavLink to="/report">Report</NavLink>
          </li>
          <li>
            <NavLink onClick={handleLogOut}>Log Out</NavLink> 
          </li>
        </ul>
      </nav>
    </div>
  )
}
  else if (employee == true)
    return(
      <div>
        <h1>Welcome Back </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/employee">Me</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
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
  else
  return (
    <div className='header'>
      <h1>Harvest Haven</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          <li>
            {loggedIn ?
              <NavLink onClick={handleLogOut}>Log Out</NavLink> :
              <NavLink to="/SignIn">Sign In</NavLink>
            }
          </li>
          <li>{loggedIn && admin ? <button onClick={showManagerHeader}>Manager</button> : ""}</li>
        </ul>
      </nav>
    </div>
  )
}
