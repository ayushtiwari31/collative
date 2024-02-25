import React from 'react'
import './Features.css'
import pantry from '../../images/pantry.png'
import gaming from '../../images/gaming.png'
import relax from '../../images/relax.png'
import cafe from '../../images/cafe.png'
import booth from '../../images/booth.png'
import medical from '../../images/medical.png'

function Features() {
  return (
    <div className="features">
        <h1>Access Special Features Exclusively</h1>
        <span> Experience Unparalleled Coworking Amenities for Enhanced Productivity and a Touch of Luxury.</span>
        <div className="features-container">
            <div className="features-card">
                <img src={gaming} alt="" />
                <span features-card-text>Gaming Room</span>
            </div>

            <div className="features-card">
                <img src={relax} alt="" />
                <span features-card-text>Wellness/ Relaxtion Room</span>
            </div>

            <div className="features-card">
                <img src={cafe} alt="" />
                <span features-card-text>Cafeteria</span>
            </div>
        </div>

        <div className="features-container">
            <div className="features-card">
                <img src={booth} alt="" />
                <span features-card-text>Phone Booth</span>
            </div>

            <div className="features-card">
                <img src={medical} alt="" />
                <span features-card-text>Medical Room/ Isolation Room</span>
            </div>

            <div className="features-card">
                <img src={pantry} alt="" />
                <span features-card-text>Pantry</span>
            </div>
        </div>

    </div>
  )
}

export default Features