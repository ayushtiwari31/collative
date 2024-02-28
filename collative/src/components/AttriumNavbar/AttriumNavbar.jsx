import React, { useState } from 'react';
// import {Link} from 'react-scroll'
import './AttriumNavbar.css'
import logo from '../../images/logo2.png'
import { Link,NavLink } from "react-router-dom";
import Poster from '../../images/Poster.jpg'
import logo1 from '../../images/logo.png'

function AttriumNavbar() {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleClick=()=>{

    if(isOpen)
    setIsOpen(false)
  }
  return (
    <div className="n-wrapper " onClick={handleClick}  >
       
        {/* <div className="header header2">Unrivalled workspace. Great discounts. 25% off. *T&C apply*</div> */}

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

                <a href={Poster} download>
                  <button className="button n-button download" >Download Brochure</button>
                </a>

            <Link to="about" spy={true} smooth={true} >
              <button className="button n-button getstarted" >Get Started</button>
            </Link>

        </div>




        {/* mobile view */}

      <nav className="navbar">
      <div className="navbar-container">

              {/* <div className="n-name-mobile">
                  <img src={logo1} alt="" className='logo-mobile' />
              </div> */}

        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
          
          <li className="nav-item">
              <NavLink to="/"   
                style={({ isActive }) => ({color: isActive ? "orange" : "white",})}
                >
                  Home
                </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/offerings"
                style={({ isActive }) => ({color: isActive ? "orange" : "white",})} >
                  Offerings
                </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/about" 
                style={({ isActive }) => ({color: isActive ? "orange" : "white",})} >
                    About
                </NavLink>
          </li>
          <li className="nav-item">
          <NavLink to="/contact" 
                style={({ isActive }) => ({color: isActive ? "orange" : "white",})} >
                    Contact
                </NavLink>
          </li>

      

          <li className="nav-item">
          <NavLink to="/blogs" 
                style={({ isActive }) => ({color: isActive ? "orange" : "white",})} >
                    Blogs
          </NavLink>
          </li>

        </ul>

        <div className="n-name-mobile">
                  <img src={logo1} alt="" className='logo-mobile' />
        </div>
      </div>
    </nav>
    </div>
  )
}

export default AttriumNavbar