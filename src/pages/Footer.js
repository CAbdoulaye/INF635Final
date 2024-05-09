import React from 'react';
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa';
import './styles.css';

export default function Footer() {
  return (
    <div className='footer'>
      <h2>Stay Connected</h2>
      <FaFacebook size={30}/>
      <FaInstagram size={30}/>
      <FaTwitter size={30}/>
    </div>
  )
}
