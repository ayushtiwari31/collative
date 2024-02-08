import React from 'react'
import {Link} from 'react-scroll'
import './Navbar.css'
import logo from '../../images/logo.png'


function Navbar() {
  return (
    <div className="n-wrapper" id='Navbar' >
        {/* <div className="n-left">
           <div className="n-name">Suraj</div>
        </div> */}
        <div className="header">Unrivalled workspace. Great discounts. 25% off. *T&C apply*</div>
        <div className="n-right">
            {/* <div className="n-list"> */}

                <ul style={{ listStyleType: "none" }}>

                   <div className="n-name">
                    <img src={logo} alt="" className='logo'/>
                   </div>

                    <li >   
                    <Link activeClass="active" to="Home" spy={true} smooth={true}>
                      Home
                      </Link>
                    </li>
                 
                    <li>
                    <Link to="openings" spy={true} smooth={true}>
                      Openings
                    </Link>
                    </li>

                    <li>
                    <Link to="works" spy={true} smooth={true}>
                        About us
                    </Link>
                    </li>

                    <li>
                    <Link to="contact" spy={true} smooth={true}>
                        Contact us
                    </Link>
                    </li>

                    <li>
                    <Link to="testimonial" spy={true} smooth={true}>
                        Blogs
                    </Link>
                    </li>

                </ul>

                <Link to="contact" spy={true} smooth={true}>
                  <button className="button n-button number">+91-9711999628</button>
                </Link>

            <Link to="contact" spy={true} smooth={true}>
              <button className="button n-button started">Get Started</button>
            </Link>

            {/* </div> */}
            {/* <Link to="contact" spy={true} smooth={true}>
            <button className="button n-button">Contact</button>
            </Link> */}
        </div>
    </div>
  )
}

export default Navbar