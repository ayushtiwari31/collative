import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import SliderCard from '../SliderCard/SliderCard.jsx';
import 'swiper/swiper-bundle.css';
import './SliderPage.css'
import man from '../../images/man.jpg'
import Atrium from '../../images/1st.png'
import interview from '../../images/2nd.png'
import work from '../../images/3rd.png'
import meeting from '../../images/4th.png'
import hall from '../../images/5th.png'



import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core'
SwiperCore.use([Autoplay,Pagination,Navigation])


function SliderPage() {
  return (
    <div className='container' id='contact'>

        <span className='heading-slider'>Your Business, Your Custom Solutions</span>
        <span className='lower-title'>Creating Spaces to Match Your Goals, Delivering the Best Possible Outcomes</span>
    <Swiper

       
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}

        breakpoints={{
          350: { slidesPerView: 1, spaceBetween: 10 },
          // 480: { slidesPerView: 3, spaceBetween: 150 },
          // 768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}

        navigation={{ 
            prevEl: '.swiper-button-prev', 
            nextEl: '.swiper-button-next' 
        }}

        loop={true} 
       
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
      }}


        className="service-slider"
      
    >
        <div className="swiper-button-prev arrow"></div>
        <div className="swiper-button-next arrow"></div>

        <SwiperSlide >
          <SliderCard title={"Atrium for Events"} description={"Elevate occasions with atrium unmatched. Event hosting and management expertise."} photo={Atrium} />
        </SwiperSlide>
        <SwiperSlide >
          <SliderCard title={"Interview Rooms"} description={"Where professional stories Unfolds and Career take flights"} photo={interview} />
        </SwiperSlide>
        <SwiperSlide >
          <SliderCard title={"Shared Workspace"} description={"Elevate productivity in Our Dynamicand Shared Workspace environment"} photo={work} />
        </SwiperSlide>
        <SwiperSlide >
          <SliderCard title={"Meeting Rooms"} description={"Transformative meeting rooms to boost productivity "} photo={meeting} />
        </SwiperSlide>
        <SwiperSlide >
          <SliderCard title={"Conference Hall"} description={"Elevate your eventsin Our State-Of-The-Art Conference Hall"} photo={hall}  />
        </SwiperSlide>
       
      </Swiper>
    </div>
  )
}

export default SliderPage
