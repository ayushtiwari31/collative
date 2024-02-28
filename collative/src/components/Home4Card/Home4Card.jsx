import React from 'react'
import './Home4Card.css'

function Home4Card({photo,title,location,}) {
  return (
    <div className="home4-card">
          <img src={photo} alt="" />
          <h1>{title}</h1>
          <span>{location}</span><br/>
          <hr></hr>
          <div className="home4-card-bottom">
            <div className="card-bottom-left">
              <span>High Speed WiFi</span>
              <span>Coffee & Bar</span>
            </div>
            <div className="card-bottom-right">
              <button>Explore More</button>
            </div>
          </div>
    </div>
  )
}

export default Home4Card