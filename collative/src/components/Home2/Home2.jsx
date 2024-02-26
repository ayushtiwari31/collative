import React from 'react'
import './Home2.css'
import home from '../../images/home2bg.png'
import calm from '../../images/calm.png'
import south1img from '../../images/south1img.png'
import south2img from '../../images/south2img.png'
import south3img from '../../images/south3img.png'
import prize1 from '../../images/prize1.png'
import prize2 from '../../images/prize2.png'
import prize3 from '../../images/prize3.png'
import black1 from '../../images/black1.png'
import black2 from '../../images/black2.png'
import black3 from '../../images/black3.png'
import black4 from '../../images/black4.png'
import black5 from '../../images/black5.png'
import black6 from '../../images/black6.png'
import black7 from '../../images/black7.png'
import black8 from '../../images/black8.png'
import black9 from '../../images/black9.png'
import Rajdarbar from '../../images/rajdarbar.png'
import legacy1 from '../../images/legacy1.png'
import legacy2 from '../../images/legacy2.png'
import legacy3 from '../../images/legacy3.png'
import legacyline from '../../images/legacy-line.png'


function Home2() {
  return (
    <div className="attrium-container page2">
        <img src={home} alt="" />
        <div className="attrium-card page2card">
            <span className="attrium-heading">
                Where Senses Collate &<br/> Uplift Your Work<br/> 
            </span><br/>
            <div>
            <span className='attrium-line'>________________________</span><br/>
            <br/>
            {/* <span className='attrium-line2'>________________________</span><br/> */}
            <span className="attrium-text">
            Introduce yourself to a Space that speaks of Modernity and has a Peaceful Groove. Let your Business flourish into the vision you imagined it to be. Come and entrust your vision to Collative, a Premium Coworking Space.
            </span>
            </div>

            <button className="attrium-button" onClick={()=>console.log("hello ayush")} >
                We Are Offering
            </button>
        </div>


        <div className="calm">
            <span className="calm1">
                A Calm in the Chaos
            </span>
            <span className="calm2">
            "Welcome to COLLATIVE, your premium coworking haven nestled in the vibrant heart of South Delhi. Designed to elevate businesses to a harmonious rhythm, our space is enveloped in biophilia, offering a serene working environment. At COLLATIVE, we cultivate a tranquil work culture with a mindful touch, preserving the integrity of your five senses and amplifying productivity. Enjoy the convenience of ample parking and bask in the beauty of our 4-way open property, embracing a peaceful stillness that defines the essence of our unique workspace."
            </span>

            <img src={calm} alt="" className="calmimg" />
        </div>
        
        <div className="south">
            <span className="south1">
                Why Choose Collative For Co-Working<br/>
                Space In South Delhi ?
            </span>
            <span className="south2">
            "Embark on a Workspace Revolution: Immerse yourself in the vibrant realm of Collative, where unparalleled facilities and a matchless ambiance redefine the future of workspaces. Our commitment is to ensure that every moment spent here is not just productive but a genuinely rewarding experience for our esteemed members."
            </span>

            <div className="south-cards">
                <div className="south-card">
                    <img src={south1img} alt="" className="south1img" />
                    <span>Nestled Amidst Greenery &<br/>Freshness</span>
                    <img src={prize1} alt="" className="south-prize" />
                </div>

                <div className="south-card">
                    <img src={south2img} alt="" className="south2img" />
                    <span>24x7  Complete Surveillance</span>
                    <img src={prize2} alt="" className="south-prize" />
                </div>

                <div className="south-card">
                    <img src={south3img} alt="" className="south3img" />
                    <span>Ample Parking for 250+ Cars</span>
                    <img src={prize3} alt="" className="south-prize" />
                </div>
            </div>
           
        </div>

        <div className="exclusive">
                <h1>Revel In Exclusive Features</h1>
                <span>Experience the joy of distinctive and exclusive features.</span>

                <div className="exclusive-container">
                    <div className="exclusive-card">
                        <img src={black1} alt="" className="black-card" />
                        <span className="black-span">Dedicated Workstation<br/>
                        & Lockers</span>
                    </div>

                    <div className="exclusive-card">
                        <img src={black2} alt="" className="black-card" />
                        <span className="black-span">Doctor-on-call facility<br/>
                        available for medical needs</span>
                    </div>

                    <div className="exclusive-card">
                        <img src={black3} alt="" className="black-card" />
                        <span className="black-span">Phone booths for <br/>
                        undisturbing business calls</span>
                    </div>
                </div>

                <div className="exclusive-container">
                    <div className="exclusive-card">
                        <img src={black4} alt="" className="black-card" />
                        <span className="black-span">Rejuvenating cafeteria <br/>
                    coffee kiosks</span>
                    </div>

                    <div className="exclusive-card">
                        <img src={black5} alt="" className="black-card" />
                        <span className="black-span">Secured keyless entries &<br/>
                        24×7 surveillance</span>
                    </div>

                    <div className="exclusive-card">
                        <img src={black6} alt="" className="black-card" />
                        <span className="black-span">Complimentary tea/coffee <br/>
                        services</span>
                    </div>
                </div>


                <div className="exclusive-container">
                    <div className="exclusive-card">
                        <img src={black7} alt="" className="black-card" />
                        <span className="black-span">Best in class data <br/>
                    connectivity</span>
                    </div>

                    <div className="exclusive-card">
                        <img src={black8} alt="" className="black-card" />
                        <span className="black-span">Expeditious customer<br/>
                        assistance </span>
                    </div>

                    <div className="exclusive-card">
                        <img src={black9} alt="" className="black-card" />
                        <span className="black-span">Timely disinfection & <br/>
                        sanitization</span>
                    </div>
                </div>
        </div>


        <div className="rajdarbar">
            <h1>How we started?</h1>
            <img src={Rajdarbar} alt="" />
            <span>
            Founded by our Chairman, Dr. Rakesh Garg, Rajdarbar<br/> 
            Realty represents a combination of Indian Heritage and<br/> 
            Modern Luxury. Making footprints in the Metropolitan, Tier <br/>
            2 & 3 Cities, with our Commercial & Residential Spaces.
            </span>
        </div>

        <div className="business">
            <h1>Business Acumen of More than <br/>
            Two Decades</h1>
            <span>A Legacy of Business Excellence and Acumen.</span>
            <div className="legacy">
                
                <div className="legacy1">
                    <div className="legacy-card">
                    Rajdarbar Group, a pioneer with decades of success, introduces the Collative Community, an initiative fostering new business opportunities.
                    </div>
                    <div className="legacy-cards">
                        <img src={legacy1} alt="" />
                    </div>
                    
                    <div className="legacy-card">
                    With Collative, Rajdarbar aims to carry forward the Tradition of providing Regal Experiences to its Clientele. The Architecture, Ambiance, and Aesthetics, are inspired by the Traditionalism that Rajdarbar boasts proudly.
                    </div>
                </div>

                <img src={legacyline} alt="" className="legacy-line" />
                
                <div className="legacy1">
                    
                    <div className="legacy-cards">
                        <img src={legacy2} alt="" />
                    </div>
                    <div className="legacy-card legacy-black">
                    Rajdarbar Group, a pioneer with decades of success, introduces the Collative Community, an initiative fostering new business opportunities.
                    </div>
                    
                    <div className="legacy-cards">
                        <img src={legacy3} alt="" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Home2