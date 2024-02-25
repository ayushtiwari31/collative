import React from 'react'
import './Harmony.css'
import harmony from '../../images/harmony.jpeg'
import arrow from '../../images/arrow.png'

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination ,Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper/core'
SwiperCore.use([Autoplay,Pagination,Navigation]);

function Harmony() {
  return (
    <div className="harmony">
        <h1 className="harmony-heading">Elevating Your Work Through Collative Harmony</h1>
        <span className="harmony-span">Collative is not just a co-working space; it's a lifestyle. Designed for the modern professional who<br/> 
        values a seamless blend of work and leisure, Collative provides an unparalleled environment where<br/>
         productivity meets luxury. Our spaces are meticulously curated to inspire creativity, foster
         <br/> collaboration, and elevate the overall work experience. </span>

        <Swiper
        spaceBetween={0}
        slidesPerView={1}
        grabCursor={true}
        

        // breakpoints={{
        //   350: { slidesPerView: 1, spaceBetween: 10 },
        //   1024: { slidesPerView: 4, spaceBetween: 30 },
        // }}
        centeredSlides={true}
        navigation={{ 
            prevEl: '.swiper-button-prev', 
            nextEl: '.swiper-button-next' 
        }}

        loop={true} 
       
        pagination={{ clickable: true }}
    //     autoplay={{
    //       delay: 2000,
    //       disableOnInteraction: false
    //   }}
        className="harmony-slider"
    >
        {/* <div className="swiper-button-prev arrow"></div>
        <div className="swiper-button-next arrow"></div> */}

        <SwiperSlide className='harmony-card'>
          <div className="harmony-slider-container">
            <img src={harmony} alt="" />
            <div className="harmony-arrow">
                <img src={arrow} alt=""/>
            </div>
              
          </div>
        </SwiperSlide>

        <SwiperSlide className='harmony-card'>
          <div className="harmony-slider-container">
            <img src={harmony} alt="" />
            <div className="harmony-arrow">
                <img src={arrow} alt=""/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className='harmony-card'>
          <div className="harmony-slider-container">
            <img src={harmony} alt="" />
            <div className="harmony-arrow">
                <img src={arrow} alt=""/>
            </div>
          </div>
        </SwiperSlide>
               
      </Swiper>

      <button className="harmony-about">
        About Collative
      </button>
    </div>
  )
}

export default Harmony