import React from 'react'
import './Footer.css'
import insta from '../../images/insta.png'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'
import address from '../../images/address.png'
import phone from '../../images/phone.png'
import logo from '../../images/logo.png'
import Newsletter from '../Newsletter/Newsletter.jsx'

function Footer() {
  return (
    <div className="footer">
        <div className="upper-footer">
            <div className="first">
                <img src={logo} alt="" className='logo' />
                <p>Welcome to collative whereyour workdayis elevated,and successis a shared journey
                    we redefines workspace luxury. Melding sophistication with functionality .Provides a curated 
                    environment where productivity meets transquilty. Tailored for the modern professional. 
                </p>
                <div className="news">
                    <span>Newsletter</span>
                    <Newsletter/>
                </div>
            </div>
            <div className="second">
                <p className='offer'>OFFERINGS</p>
                <p>Exclusive Management</p>
                <p>Shared Workspace</p>
                <p>Meeting Rooms</p>
                <p>Conference Hall</p>
                <p>Atrium for Events</p>
                <p>Shared Spaces</p>
            
            </div>
            
            <div className="second">
                <p className='offer'>Quick Links</p>
                <p>Contact us</p>
                <p>Blogs</p>
                <p>Why us</p>
                <p>Offerings</p>
                <p>About us</p>
                
            </div>
            <div className="fourth">
            <p className='offer-add'>OFFICE ADDRESS</p>
            <div>
                <img src={address} alt="" /><p className='offer'>Global Foyer White House<br/> NBCC Tower-3-4,Puship Vihar,<br/> Sector-5,New Delhi</p>
            </div>
            <div>
                 <img src={phone} alt="" /><p className='offer'>Call us <br/>+91 9711 999 628<br/>+91 9711 669 709</p>
            </div>
            <div>
                 <img src={email} alt="" /><p className='offer'>enquiry@collective.in</p>
               
            </div>
            
           
           
            </div>

        </div>
        <div className="lower-footer">
            <div className="icons">
                <a href="https://www.facebook.com"><img src={insta} alt="" /></a>
                <a href="https://twitter.com"><img src={twitter} alt="" /></a>
                <a href="https://www.instagram.com"><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com"><img src={linkedin} alt="" /></a>
            
            </div>
            <div className="rights">
              <span>Copyrigt &copy; 2020. All rights reserved</span>
            </div>
            <div className="terms">
                <span>Terms & Conditions</span>
                <span>Privacy Policy</span>
            </div>
        </div>
    </div>
  )
}

export default Footer