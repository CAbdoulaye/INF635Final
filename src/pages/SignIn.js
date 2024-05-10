import React, { useState } from 'react'
import FormHeader from '../components/shared/FormHeader'
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import '../Form.css'
import { UserAuth } from '../components/context/AuthContext';

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [switchToRegister, setSwitchToRegister] = useState(false);
  const navigate = useNavigate()

  const {createUser, signIn} = UserAuth();


  const submitLogin = async(e) =>{
    e.preventDefault();
    if(switchToRegister !== true){
      console.log({email, password})
      try {
        await signIn(email, password);
        console.log("Signed In")
        navigate("/")
      } catch(err){
        console.log(err)
      }
    }
    else{
      console.log({name, email, password, confirmPassword})
      try {
        await createUser(email, password);
        navigate("/")
      } catch(err){
        console.log(err)
      }
    }

    setName("")
    setEmail("")
    setPassword("")
    setSwitchToRegister("")
  }

  const switchForm = () =>{
    setSwitchToRegister((prevState) => !prevState)
  }

  if(switchToRegister !== true)
  return (
    <div className='container'>
      <FormHeader description="Sign In:"/>
      <form onSubmit={submitLogin}>
        <FormInput
          description="Email: "
          type="email"
          placeholder="Enter Email"
          className="emailInput"
          value={email}
          onChange={(e) =>{setEmail(e.target.value)}}
        />
        <FormInput
          description="Password: "
          type="password"
          placeholder="Enter Password"
          className="passwordInput"
          value={password}
          onChange={(e) =>{setPassword(e.target.value)}}
        />
        <FormButton title="Log In"/>
        <div className='alternativeLogin'>
          <label>Or Sign in with:</label>
          <div className="iconGroup">
            <FaFacebook id="facebookIcon"/>
            <FaGithub id="gitIcon"/>
            <FaGoogle id="googleIcon"/>
          </div>
        </div>
      </form>
      <Link to="#">Forgot Password</Link>
      <p>Do Not Have an Account?</p>
      <Link to="#" onClick={switchForm}>Register Here</Link>
    </div>
  )
  else
  return (
    <div>
      <FormHeader description="Register:"/>
      <form onSubmit={submitLogin}>
      <FormInput
          description="Name: "
          type="text"
          placeholder="Enter Your Full Name"
          className="nameInput"
          value={name}
          onChange={(e) =>{setName(e.target.value)}}
        />
        <FormInput
          description="Email: "
          type="email"
          placeholder="Enter Email"
          className="emailInput"
          value={email}
          onChange={(e) =>{setEmail(e.target.value)}}
        />
        <FormInput
          description="Password: "
          type="password"
          placeholder="Enter Password"
          className="passwordInput"
          value={password}
          onChange={(e) =>{setPassword(e.target.value)}}
        />
        <FormInput
          description="Confirm Password: "
          type="password"
          placeholder="Confirm Your Password"
          className="confirmPasswordInput"
          value={confirmPassword}
          onChange={(e) =>{setConfirmPassword(e.target.value)}}
        />
        <FormButton title="Register"/>
      </form>
      <h1>Register</h1>
      <p>Already Have An Account?</p>
      <Link to="#" onClick={switchForm}>Sign In Here</Link>
    </div>
  )
}
