import React from 'react'
import './Card.css'

function Card({heading,para,img,name,loc}) {
  return (
    <div className="card">
       <span>{heading}</span>
       <div className="para">
         <p>
            {para}
         </p>
       </div>
       <div className="profile">
         <img src={img} alt="" />
         <div className="name">
            {name}<br/>
            {loc}
         </div>
       </div>

    </div>
  )
}

export default Card