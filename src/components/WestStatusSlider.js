import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './BuildStatusSlider.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

import west1 from '../assets/images/build-status/status-west1.jpg'
import west2 from '../assets/images/build-status/status-west2.jpg'
import beskid1 from '../assets/images/build-status/status-beskid1.jpg'
import beskid2 from '../assets/images/build-status/status-beskid2.jpg'

export default function WestStatusSlider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={false}

        breakpoints={{
            279: {
                slidesPerView: 1,
            },
            620: {
                slidesPerView: 2,
            },
            821: {
                slidesPerView: 3,
            },

        }}

        modules={[FreeMode, Autoplay]}
        className="buildStatusSlider"
      >
        <SwiperSlide><img className='buildStatusImg' src={west1} alt="west-town"/></SwiperSlide>
        <SwiperSlide><img className='buildStatusImg' src={west2} alt="west-town"/></SwiperSlide>
        <SwiperSlide><img className='buildStatusImg' src={beskid1} alt="beskid"/></SwiperSlide>
        <SwiperSlide><img className='buildStatusImg' src={beskid2} alt="beskid"/></SwiperSlide>
      </Swiper>
    </>
  );
}
