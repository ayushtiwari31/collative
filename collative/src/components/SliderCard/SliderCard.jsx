import React from 'react'
import './SliderCard.css'
import {Link} from 'react-scroll'


function SliderCard({title,description,photo}) {
  return (
    <div className="cards">
        
        <Link  to="Home" spy={true} smooth={true}>
            <img src={photo} alt="" />
            <span className="title">{title}</span>
        </Link>
        <span className="sub-title">{description}</span>
    </div>
  )
}

export default SliderCard