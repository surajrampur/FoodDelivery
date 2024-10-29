import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
      <div className='footer' id='footer'>
          <div className="footer-content">
              <div className="footer-content-left">
                  <img src={assets.logo} alt='' />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora in assumenda sequi nobis dolores voluptate id, nemo a! Blanditiis sequi odit, sint earum unde voluptas.</p>
                  <div className="footer-social-icon">
                      <img src={assets.facebook_icon} alt='' />
                      <img src={assets.twitter_icon} alt='' />
                      <img src={assets.linkedin_icon} alt='' />
                  </div>
              </div>
              <div className="footer-content-center">
                  <h2>Company</h2>
                  <ul>
                      <li>Home</li>
                      <li>About us </li>
                      <li>Delivery</li>
                      <li>Privecy policy</li>
                  </ul>
              </div>
              <div className="footer-content-right">
                  <h2>Get in touch</h2>
                  <ul>
                      <li>+1-232-353-3555</li>
                      <li>contact@gmail.com</li>
                    
                  </ul>
                </div>
          </div>

          <hr />
          <p className='footer-copyright'>copyright 2024 @ tomato.com - All right reserved</p>
    </div>
  )
}

export default Footer