import React from 'react'
import './Bottom.css'
import bottombg from '../../images/bottombg.png'

function Bottom() {
 
  return (
    <div className="bottom" >
        <img src={bottombg} alt="" className="bottombg" />
        <span className="bottom-text">Love What <span className="bold">You See? </span>Seize it <span className="bold">Now</span> <button className="bottom-btn">Book a Visit</button></span>
        <span className="bottom-text">Ready to attain <span className="bold">Success? </span>Connect now! <button className="bottom-btn2">Let's Connect</button></span>
    </div>
  )
}

export default Bottom