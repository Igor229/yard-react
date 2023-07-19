import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

import beskid1 from './assets/images/beskid-home/besked1.jpg'
import beskid2 from './assets/images/beskid-home/besked2.JPG'
import beskid3 from './assets/images/beskid-home/besked3.JPG'
import beskid4 from './assets/images/beskid-home/besked4.JPG'
import beskid5 from './assets/images/beskid-home/besked5.JPG'
import beskid6 from './assets/images/beskid-home/besked6.JPG'
import beskid7 from './assets/images/beskid-home/besked7.JPG'
import beskid8 from './assets/images/beskid-home/besked8.jpg'

export default function Slider() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className="slider-img" src={beskid1} alt="beskid-home"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={beskid2} alt="beskid-home"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={beskid3} alt="beskid-home"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={beskid4} alt="beskid-home"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={beskid5} alt="beskid-home"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={beskid6} alt="beskid-home"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={beskid7} alt="beskid-home"/><div className="shadow"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

