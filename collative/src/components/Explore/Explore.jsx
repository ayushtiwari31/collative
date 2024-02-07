import React from 'react'
import './Explore.css'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img7 from '../../images/7.png'
import img6l from '../../images/6l.png'
import img6r from '../../images/6r.png'

function Explore() {
  return (
    <div className="explore" id='openings'>
        <span className='heading'>Explore Our Offerings</span>
        <span className='sub-heading'>weund asjcsb saubb</span>
        <div>
            <img src={img1}  alt="" />
        </div>
        <div>
            <img src={img2}  alt="" />
        </div>
        <div>
            <img src={img3}  alt="" />
        </div>
        <div>
            <img src={img4} alt="" />
        </div>
        <div>
            <img src={img5} alt="" />
        </div>
        <div className="sixth">
           <img src={img6l} className='img6l' alt="" />
           <img src={img6r}className='img6r' alt="" />
        </div>
        <div>
            <img src={img7} alt="" />
        </div>

        <div className="line"></div>
        
        
        
       

    </div>
  )
}

export default Explore