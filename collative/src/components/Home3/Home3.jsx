import React from 'react'
import './Home3.css'
import Form from '../../components/Form/Form.jsx'
import map from '../../images/map.png'
import email2 from '../../images/email2.png'
import phone2 from '../../images/phone2.png'
import office from '../../images/office.png'
import social from '../../images/social.png'

import insta from '../../images/insta.png'
import twitter from '../../images/twitter.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'

import horizontalline from '../../images/horizontal-line.png'
import collativelogo from '../../images/collative-logo.png'
import collativebg from '../../images/collative-bg.png'



function Home3() {
  return (
    <div className="home3">
        <div className="home3-container">
            <div className="home3-container-1">
                <h1>Collative team is here to provide you<br/> 
                with a de-densified co-working place</h1>
                <span>Fill out the form and we’ll get back to you as soon as possible.</span>

                <div className="home3-cards">
                    <div className="home3-card">
                        <img src={email2} alt="" className="email2" /><br/>
                        <span style={{fontWeight:'bold'}}>Email</span><br/>
                        <span>enquiry@collative.in</span>
                    </div>

                    <div className="home3-card">
                        <img src={phone2} alt="" className="email2" /><br/>
                        <span style={{fontWeight:'bold'}}>Phone</span><br/>
                        <span>+91 9711 999 628</span>
                        <span>+91 9711 669 709</span>
                    </div>
                </div>

                <div className="home3-cards">
                    <div className="home3-card">
                        <img src={office} alt="" className="email2" /><br/>
                        <span style={{fontWeight:'bold'}}>Office</span><br/>
                        <span>1686, Geraldine Lane</span>
                        <span>New York, NY 10013</span>
                    </div>

                    <div className="home3-card">
                        <img src={social} alt="" className="email2" /><br/>
                        <span style={{fontWeight:'bold'}}>Socials</span><br/>
                        <div className="icons home-icon">
                <a href="https://www.facebook.com" className='home-icons'><img src={insta} alt="" /></a>
                <a href="https://twitter.com" className='home-icons'><img src={twitter} alt="" /></a>
                <a href="https://www.instagram.com" className='home-icons'><img src={facebook} alt="" /></a>
                <a href="https://www.instagram.com" className='home-icons'><img src={linkedin} alt="" /></a>
            </div>
                        
                    </div>
                </div>
            </div>
            <div className="home3-container-2">
               <Form/>
            </div>
        </div>

        <div className="map">
            <h1>Visit Us!</h1>
            {/* <img src={map} className='mapped' alt=""  /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1531.2108262075797!2d77.22283900497052!3d28.52211738128363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1d520d135649%3A0x7c19f8b66306bf90!2sCollative%20-%20Coworking%20Space%20in%20South%20Delhi!5e0!3m2!1sen!2sin!4v1708971571892!5m2!1sen!2sin"  className='collative-map'></iframe>
        </div>


        <div className="collative-div">
            {/* <img src={horizontalline} alt="" className="horizontal-line" /> */}
            <img src={collativebg} alt="" className="collative-bg" />
            <img src={collativelogo} alt="" className="collative-logo" />
            {/* <img src={horizontalline} alt="" className="horizontal-line" /> */}
            <span className="coll-1">Max Super<br/>Speciality Hospital</span>
            <span className="coll-2">Saket & Malviya <br/>Nagar Metro</span>
            <span className="coll-3">Select CITYWALK<br/>Mail</span>

            <span className="coll-4">Supreme<br/>Court</span>
            <span className="coll-5">Connaught<br/>Place</span>
            <span className="coll-6">Indira Gandhi <br/>International Airport</span>
        </div>
    </div>
  )
}

export default Home3