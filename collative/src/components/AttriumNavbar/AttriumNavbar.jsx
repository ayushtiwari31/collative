import React, { useState } from 'react';
// import {Link} from 'react-scroll'
import './AttriumNavbar.css'
import logo from '../../images/logo2.png'
import { Link,NavLink } from "react-router-dom";

function AttriumNavbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="n-wrapper "  >
       
        <div className="header header2">Unrivalled workspace. Great discounts. 25% off. *T&C apply*</div>

        <div className="n-rights attrium-navbar">

                <ul style={{ listStyleType: "none" }}>

                   <div className="n-name">
                    <NavLink to='/'>
                         <img src={logo} alt="" className='logo2'/>
                    </NavLink>
                   
                   </div>

                    <li >   
                    <NavLink to="/"   
                style={({ isActive }) => ({color: isActive ? "orange" : "black",})}
                >
                  Home
                </NavLink>
                    </li>
                 
                    <li>
                    <NavLink to="/offerings"
                style={({ isActive }) => ({color: isActive ? "orange" : "black",})} >
                  Offerings
                </NavLink>
                    </li>

                    <li>
                    <NavLink to="/about" 
                style={({ isActive }) => ({color: isActive ? "orange" : "black",})} >
                    About us
                </NavLink>
                    </li>

                    <li>
                    <NavLink to="/contact" 
                style={({ isActive }) => ({color: isActive ? "orange" : "black",})} >
                    Contact us
                </NavLink>
                    </li>

                    <li>
                    <NavLink to="/blogs" 
                style={({ isActive }) => ({color: isActive ? "orange" : "black",})} >
                    Blogs
                </NavLink>
                    </li>

                </ul>

                <Link to="contact" spy={true} smooth={true}>
                  <button className="button n-button download" >Download Brochure</button>
                </Link>

            <Link to="contact" spy={true} smooth={true} >
              <button className="button n-button getstarted" >Get Started</button>
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

export default AttriumNavbar