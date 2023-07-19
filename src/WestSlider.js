import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slider.css';

// import required modules
import { Pagination } from 'swiper/modules';

import west1 from './assets/images/west-town/west1.jpg'
import west2 from './assets/images/west-town/west2.jpg'
import west3 from './assets/images/west-town/west3.jpg'
import west4 from './assets/images/west-town/west4.jpg'
import west5 from './assets/images/west-town/west5.jpg'
import west6 from './assets/images/west-town/west6.jpg'
import west7 from './assets/images/west-town/west7.jpg'
import west8 from './assets/images/west-town/west8.jpg'
import west9 from './assets/images/west-town/west9.JPG'
import west10 from './assets/images/west-town/west10.jpg'

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
            <img className="slider-img" src={west1} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west2} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west3} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west4} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west5} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west6} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west7} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west8} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west9} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
        <SwiperSlide>
            <img className="slider-img" src={west10} alt="west-town"/><div className="shadow"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

