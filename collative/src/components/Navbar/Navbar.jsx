import React, { useState } from 'react';
import {Link} from 'react-scroll'
import './Navbar.css'
import logo from '../../images/logo.png'


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <div className="n-wrapper" id='Navbar' >
       
        <div className="header">Unrivalled workspace. Great discounts. 25% off. *T&C apply*</div>

        <div className="n-right">

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

        </div>




        {/* mobile view */}

      <nav className="navbar">
      <div className="navbar-container">
              <div className="n-name">
                    <img src={logo} alt="" className='logo'/>
              </div>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <li className="nav-item">
          <Link activeClass="active" to="Home" spy={true} smooth={true} onClick={toggleMenu} className='nav-links'>
                      Home
          </Link>
          </li>
          <li className="nav-item">
          <Link to="openings" spy={true} smooth={true} onClick={toggleMenu}className='nav-links'>
                      Openings
          </Link>
          </li>
          <li className="nav-item">
          <Link to="works" spy={true} smooth={true} onClick={toggleMenu} className='nav-links'>
                        About us
          </Link>
          </li>
          <li className="nav-item">
          <Link to="contact" spy={true} smooth={true} onClick={toggleMenu} className='nav-links'>
                        Contact us
          </Link>
          </li>

          <li className="nav-item">
          <Link to="testimonial" spy={true} smooth={true} onClick={toggleMenu} className='nav-links'>
                        Blogs
          </Link>
          </li>

        </ul>
      </div>
    </nav>
    </div>
  )
}

export default Navbar