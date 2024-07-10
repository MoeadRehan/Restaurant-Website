import React from 'react'
import Logo from '../Assets/Logo.svg'
import { FaInstagram } from "react-icons/fa";
import { SiLinkedin } from 'react-icons/si'
import { BsYoutube } from 'react-icons/bs'
import {FaFacebookF} from   'react-icons/fa'
const Footer = () => {
  return (
    <div className='footer-wrapper'>
        <div className='footer-section-one'>
            <div className='footer-logo-container'>
                <img src={Logo} alt="Footer Logo" />
            </div>
            <div className='footer-icons'>
                <a href='https://www.instagram.com/'><FaInstagram /></a> 
                <a href='https://www.linkedin.com/in/moead-rehan-076949275/'><SiLinkedin /></a>
                <a href='https://www.youtube.com/'><BsYoutube /></a>
                <a href='https://www.facebook.com/'><FaFacebookF /></a>
            </div>
        </div>
        <div className='footer-section-two'>
              <div className='footer-section-columns'>
                <span>Quality</span>
                <span>Help</span>
                <span>Share</span>
                <span>Careers</span>
                <span>Work</span>
                <span>Testimonials</span>
              </div>
              <div className='footer-section-columns'>
                <span>244-5333-7783</span>
                <span>Hello@food.com</span>
                <span>pres@food.com</span>
                <span>conact@food.com</span>
              </div>
              <div className='footer-section-columns'>
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
              </div>
            </div>
    </div>
  )
}

export default Footer