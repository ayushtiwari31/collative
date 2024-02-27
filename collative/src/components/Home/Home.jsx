import React,{useState,useEffect} from 'react'
import './Home.css'
import bg from '../../images/collative.jpeg'
import Form from '../Form/Form.jsx'

function Home() {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {

        function handleResize() {
          setIsMobile(window.innerWidth < 600); // Example threshold, adjust as needed
        }
    
        // Initial check
        handleResize();
    
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
    
        // Cleanup function
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);


  return (
    <div className="home" id ="Home">

        {!isMobile ? <Form className="form-home"/>:<></>}
        
        <img src={bg} alt="" className='bg' />
        <div className="data">
            <div className="text">
                <h1>1000+</h1>
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