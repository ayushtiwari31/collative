import React,{useState,useEffect} from 'react'
import './Explore.css'
import img1 from '../../images/1.png'
import img2 from '../../images/2.png'
import img3 from '../../images/3.png'
import img4 from '../../images/4.png'
import img5 from '../../images/5.png'
import img7 from '../../images/7.png'
import img6l from '../../images/6l.png'
import img6r from '../../images/6r.png'
import attrium from '../../images/attrium.png'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Explore() {

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
    <div className="explore" id='openings'>

       
        <span className='heading'>Explore Our Offerings</span>
        <span className='sub-heading'>We Have great offers!! </span>

        {/* <div className="explore-card">
            <h2>Managed Offices</h2>
            <span>
            Step into a sanctuary of productivity with our Managed Office - a-private workspace meticulously designed to elevate your professional endeavors with seamless efficiency and unparalleled comfort."
            </span>
            <div className='inner-explore'>
                <span>Tailor-made Spaces</span>
                <span>Top Notch Data Connectivity</span>
                <span>Tech-enabled ecosystems</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Enclosed Spaces for High Productivity</li>
                <li>Ergonomic Seating & First-Class Connectivity</li>
                <li>Accompanied with Top-Notch Facilities like Storage Drawers, WiFi, etc.</li>
                <li>Card Secured Entrance & Sound-Proof Cabin Doors</li>
            </ul>
        </div> */}


        {!isMobile && 
        <>

        <div className="explore-container">
            <div className="explore-left">
                {/* <div className='explore-div'> */}
                    <img src={img1}  alt="" />
                {/* </div> */}
              
            </div>


            <div className="explore-right">

            <div className="explore-card">
            <h2>Managed Offices</h2>
            <span>
            Step into a sanctuary of productivity with our Managed Office - a-private workspace meticulously designed to elevate your professional endeavors with seamless efficiency and unparalleled comfort."
            </span>
            <div className='inner-explore'>
                <span>Tailor-made Spaces</span>
                <span>Top Notch Data Connectivity</span>
                <span>Tech-enabled ecosystems</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Enclosed Spaces for High Productivity</li>
                <li>Ergonomic Seating & First-Class Connectivity</li>
                <li>Accompanied with Top-Notch Facilities like Storage Drawers, WiFi, etc.</li>
                <li>Card Secured Entrance & Sound-Proof Cabin Doors</li>
            </ul>
            </div>


            </div>


        </div>

        <div className="explore-container">
            <div className="explore-left">
                <div className="explore-card">
            <h2>Shared Workspace</h2>
            <span>
            Collaborate in shared seats, where extraordinary minds converge. Fuel your work with the vibrant exchange of ideas and creative synergy among fellow Collative members."
            </span>
            <div className='inner-explore'>
                <span>Dedicated Workstations</span>
                <span>Comfortable seating with storage</span>
                <span>Flexible Booking</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Flexible/Open Desks & Shared Seats for Professionals</li>
                <li>Spacious Workstations for Individuals</li>
                <li>Opportunity to work with like-minded people</li>
                <li>Available for Immediate Setup</li>
            </ul>
            </div>
            </div>


            <div className="explore-right">

            <div className='explore-div'>
              <img src={img2}  alt="" />
            </div>

            </div>
        </div>


        <div className="explore-container">
            <div className="explore-left">
            <div className='explore-div'>
              <img src={img3}  alt="" />
            </div>
            </div>


            <div className="explore-right">

            

            <div className="explore-card">
            <h2>Meeting Room</h2>
            <span>
            Host impactful small business meetings in the confidentiality of Collative's cutting-edge meeting rooms — a space designed to leave a lasting impression on your associates.
            </span>
            <div className='inner-explore'>
                <span>Host 10-12 People</span>
                <span>Reservation Available</span>
                <span>State Of The Art Technology</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>FEnclosed Spaces for High Productivity</li>
                <li>Ergonomic Seating & First-Class Connectivity</li>
                <li>Accompanied with Top-Notch Facilities like Storage Drawers, WiFi, etc.</li>
                <li>Card Secured Entrance & Sound-Proof Cabin Doors</li>
            </ul>
            </div>

            </div>
        </div>


        <div className="explore-container">
            <div className="explore-left">
                <div className="explore-card">
            <h2> Conference Hall</h2>
            <span>
            Impress clients effortlessly with large-scale business conferences at Collative. Experience uninterrupted comfort and unmatched sophistication for a lasting impact
            </span>
            <div className='inner-explore'>
                <span> Host up to 50+ People</span>
                <span>Centralized Mic Speaker</span>
                <span>High connective Ecosyetem</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Available for Members & Non-Members</li>
                <li>Reservation Services Available</li>
                <li>Equipped with State-Of-The-Art Technology – LCD Screens, Advanced <br/> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Connection System, Exclusive Audiovisuals, etc.</li>
                <li>Available for Immediate Setup</li>
            </ul>
            </div>
            </div>


            <div className="explore-right">

            <div className='explore-div'>
              <img src={img4} className='conf-img' alt="" />
            </div>

            </div>
        </div>


        <div className="explore-container">
            <div className="explore-left">
            <div className='explore-div'>
              <img src={img5}  alt="" />
            </div>
            </div>


            <div className="explore-right">

            

            <div className="explore-card">
            <h2>Interview Room</h2>
            <span>
            Empower your interviews with a space that resonates professionalism, facilitating seamless discussions for confident decision-making moments.
            </span>
            <div className='inner-explore'>
                <span>Tailor-made Spaces</span>
                <span>Top Notch DataConnectivity</span>
                <span>Tech-enabled ecosystems</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Enclosed Spaces for High Productivity</li>
                <li>Ergonomic Seating & First-Class Connectivity</li>
                <li>Accompanied with Top-Notch Facilities like Storage Drawers, WiFi.</li>
                <li>Card Secured Entrance & Sound-Proof Cabin Doors</li>
            </ul>
            </div>

            </div>
        </div>


        <div className="explore-container">
            <div className="explore-left">
            <div className="explore-card">
            <h2> Hot Desk</h2>
            <span>
            Flexibility meets productivity at our Hot Desks seamless, shared workspaces designed for dynamic professionals seeking a vibrant collaborative environment.
            </span>
            <div className='inner-explore'>
                <span>Premium Office Address</span>
                <span>Book Anytime</span>
                <span>Work in calmness</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Flexible/Open Desks & Shared Seats for Professionals</li>
                <li>Spacious Workstations for Individuals</li>
                <li>Opportunity to work with like-minded people</li>
                <li>Available for Immediate Setup</li>
            </ul>
            </div>
            </div>


            <div className="explore-right">

            <div className='explore-div'>
              <img src={img6r}  alt="" />
            </div>

            </div>
        </div>


        <div className="explore-container">
            <div className="explore-left">
            <div className='explore-div'>
              <img src={img7} className='atrium-img' alt="" />
            </div>
            </div>


            <div className="explore-right">

            

            <div className="explore-card">
            <h2>Atrium for events</h2>
            <span>
            Your Premier Venue for Corporate Events and Product Launches. Book Now for Unforgettable Experiences in Elegance and Innovation.
            </span>
            <div className='inner-explore'>
                <span>Host Large Events</span>
                <span>On-site Management</span>
                <span>Promising Personalization</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Co-Host & Collaborate with Collative’s assistance</li>
                <li>Event Management & Coordination</li>
                <li>Perfect for Lectures, Seminars, Workshops etc.</li>
                <li>Personalization as per the theme</li>
            </ul>
            </div>

            </div>
        </div>
        </>
        }



        {
            isMobile &&
            <div>
            <div className="explore-mobile-contaier">

            <div className="explore-card">
            <h2>Managed Offices</h2>
            <span>
            Step into a sanctuary of productivity with our Managed Office - a-private workspace meticulously designed to elevate your professional endeavors with seamless efficiency and unparalleled comfort."
            </span>
            <div className='inner-explore'>
                <span>Tailor-made Spaces</span>
                <span>Top Notch Data Connectivity</span>
                <span>Tech-enabled ecosystems</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Enclosed Spaces for High Productivity</li>
                <li>Ergonomic Seating & First-Class Connectivity</li>
                <li>Accompanied with Top-Notch Facilities like Storage Drawers, WiFi, etc.</li>
                <li>Card Secured Entrance & Sound-Proof Cabin Doors</li>
            </ul>
            </div>

            <div className="explore-card">
            <h2>Shared Workspace</h2>
            <span>
            Collaborate in shared seats, where extraordinary minds converge. Fuel your work with the vibrant exchange of ideas and creative synergy among fellow Collative members."
            </span>
            <div className='inner-explore'>
                <span>Dedicated Workstations</span>
                <span>Comfortable seating with storage</span>
                <span>Flexible Booking</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Flexible/Open Desks & Shared Seats for Professionals</li>
                <li>Spacious Workstations for Individuals</li>
                <li>Opportunity to work with like-minded people</li>
                <li>Available for Immediate Setup</li>
            </ul>
            </div>

            <div className="explore-card">
            <h2>Meeting Room</h2>
            <span>
            Host impactful small business meetings in the confidentiality of Collative's cutting-edge meeting rooms — a space designed to leave a lasting impression on your associates.
            </span>
            <div className='inner-explore'>
                <span>Host 10-12 People</span>
                <span>Reservation Available</span>
                <span>State Of The Art Technology</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>FEnclosed Spaces for High Productivity</li>
                <li>Ergonomic Seating & First-Class Connectivity</li>
                <li>Accompanied with Top-Notch Facilities like Storage Drawers, WiFi, etc.</li>
                <li>Card Secured Entrance & Sound-Proof Cabin Doors</li>
            </ul>
            </div>

            <div className="explore-card">
            <h2> Conference Hall</h2>
            <span>
            Impress clients effortlessly with large-scale business conferences at Collative. Experience uninterrupted comfort and unmatched sophistication for a lasting impact
            </span>
            <div className='inner-explore'>
                <span> Host up to 50+ People</span>
                <span>Centralized Mic Speaker</span>
                <span>High connective Ecosyetem</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Available for Members & Non-Members</li>
                <li>Reservation Services Available</li>
                <li>Equipped with State-Of-The-Art Technology – LCD Screens.</li>
                <li>Available for Immediate Setup</li>
            </ul>
            </div>

            <div className="explore-card">
            <h2>Interview Room</h2>
            <span>
            Empower your interviews with a space that resonates professionalism, facilitating seamless discussions for confident decision-making moments.
            </span>
            <div className='inner-explore'>
                <span>Tailor-made Spaces</span>
                <span>Top Notch DataConnectivity</span>
                <span>Tech-enabled ecosystems</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Enclosed Spaces for High Productivity</li>
                <li>Ergonomic Seating & First-Class Connectivity</li>
                <li>Accompanied with Top-Notch Facilities like Storage Drawers, WiFi.</li>
                <li>Card Secured Entrance & Sound-Proof Cabin Doors</li>
            </ul>
            </div>

            <div className="explore-card">
            <h2> Hot Desk</h2>
            <span>
            Flexibility meets productivity at our Hot Desks seamless, shared workspaces designed for dynamic professionals seeking a vibrant collaborative environment.
            </span>
            <div className='inner-explore'>
                <span>Premium Office Address</span>
                <span>Book Anytime</span>
                <span>Work in calmness</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Flexible/Open Desks & Shared Seats for Professionals</li>
                <li>Spacious Workstations for Individuals</li>
                <li>Opportunity to work with like-minded people</li>
                <li>Available for Immediate Setup</li>
            </ul>
            </div>

           

            

            <div className="explore-card">
            <h2>Atrium for events</h2>
            <span>
            Your Premier Venue for Corporate Events and Product Launches. Book Now for Unforgettable Experiences in Elegance and Innovation.
            </span>
            <div className='inner-explore'>
                <span>Host Large Events</span>
                <span>On-site Management</span>
                <span>Promising Personalization</span>
            </div>
            <h4>Specifications</h4>
            <ul>
                <li>Co-Host & Collaborate with Collative’s assistance</li>
                <li>Event Management & Coordination</li>
                <li>Perfect for Lectures, Seminars, Workshops etc.</li>
                <li>Personalization as per the theme</li>
            </ul>
            </div>



            </div>

            </div>
        }

      
       




{/*        
        <div className='managed'>
            <img src={img1}  alt="" />
        </div>
        <div>
            <img src={img2}  alt="" />
        </div>
        <div className='meeting-room'>
            <img src={img3}  alt="" />
        </div>
        <div>
            <img src={img4} alt="" />
        </div>
        <div className='interview-room'>
            <img src={img5} alt="" />
        </div>
        <div className="sixth">
           <img src={img6l} className='img6l' alt="" />
           <img src={img6r}className='img6r' alt="" />
        </div>
        <div>
            <img src={img7} alt="" />
        </div>
       

        <div className="line"></div> */}

    </div>
  )
}

export default Explore