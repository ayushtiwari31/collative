import React from 'react'
import './Home.css'
import bg from '../../images/collative.jpeg'
import Form from '../Form/Form.jsx'

function Home() {
  return (
    <div className="home" id ="Home">
        <Form className="form"/>
        <img src={bg} alt="" className='bg' />
        <div className="data">
            <div className="text">
                <h1>800+</h1>
                <span>Workstations</span>
            </div>

            <div className="text">
                <h1>250+</h1>
                <span>Parking Spaces</span>
            </div>

            <div className="text">
                <h1>300</h1>
                <span>Pax Event Space</span>
            </div>

            {/* <div className="text">
                <h1>24</h1>
                <span>Hours Accessibility<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T&C Apply</span>
            </div> */}
        </div>
    </div>
  )
}

export default Home