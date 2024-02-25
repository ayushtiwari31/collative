import React from 'react'
import './Attrium.css'
import attrium from '../../images/attrium.png'

function Attrium() {
  return (
    <div className="attrium-container">
        <img src={attrium} alt="" />
        <div className="attrium-card">
            <span className="attrium-heading">
                Sculpted Spaces,<br/> Unleashing Your Purpose<br/> In Style
            </span><br/>
            <div>
            <span className='attrium-line'>________________________</span><br/>
            <span className='attrium-line2'>________________________</span><br/>
            <span className="attrium-text">
            Step into the World of Collative Spaces—where Business<br/>
             Objectives meet Bespoke Environments. Immerse<br/>
              yourself in a Symphony of High-End Amenities, where<br/>
               every moment harmonizes with your work, cultivating a<br/>
                landscape of unparalleled productivity.
            </span>
            </div>

            <button className="attrium-button" onClick={()=>console.log("hello ayush")} >
                We Are Offering
            </button>
        </div>
        
    </div>
  )
}

export default Attrium