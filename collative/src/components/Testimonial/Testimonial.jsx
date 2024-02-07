import React from 'react'
import './Testimonial.css'
import Card from '../Card/Card.jsx'
import man from '../../images/man.jpg'

function Testimonial() {
    const para1= "Navigating this website transformed my learning experience. The resources are comprehensiveand the interfaceis so user friendly. Highly recommend!"
    const para2= "Every student and life long learner should bookmark this site. It's a treasure of knowledge,seamlessly blending tech with education."
    const para3= "A game-changer in entire education. This website has been instrumental in my academic journey. Kudos to the team behind it. "
    const para4= "The depth and breadth of courses offered here cater to every learner style. I've gained skills that have prepelled my career forward."


  return (
    <div className='container'id='testimonial'>

        <span className='heading'>Customer Testimonial</span>
        <span className="sub-heading">Hear what our customers love about us, real stories, real satisfaction</span>

        <div className="upper">
        <Card heading={"Easy to use, extremely helpful."} para={para1} name={"Anurag Sharma"} loc={"Delhi"} img={man} />
        <Card heading={"Quality Content, well worth it."} para={para2} name={"Krishan Kumar"} loc={"Delhi"} img={man} />
        </div>
        <div className="upper">
        <Card heading={"Found my go-to learning site!"} para={para3} name={"Himanshu"} loc={"Delhi"} img={man} />
        <Card heading={"Exceeded my expectations, truely impressed"} para={para4} name={"Preet"} loc={"Delhi"} img={man} />
        </div>
        
    </div>
  )
}

export default Testimonial