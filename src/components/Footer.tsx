import React from 'react';
import './Footer.css'
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';
import twitter from './images/twitter.png';

const Footer = () => {
  return (
    <div className='footer'>
        <ul className='footerLinks'>
            <li>Registered Address</li>
            <li>Return & Refund Policy</li>
            <li>Terms and Conditions</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className='socialIcons'>
            <div className='iconContainer'>
                <img src={instagram} alt='' height={20} width={16}/>
            </div>
            <div className='iconContainer'>
                <img src={facebook} alt=''height={20} width={16}/>
            </div>
            <div className='iconContainer'>
                <img src={twitter} alt='' height={20} width={16}/>
            </div>
         </div>
         
    </div>
  )
}

export default Footer;