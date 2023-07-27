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

function SliderCard(props) {
  const {month, title, info, img} = props
    return (
      <div>
        <img className='buildStatusImg' src={img} alt="west-town"/>
        <div className='status-info__container'>
          <p className='status-info__date'>{month}</p>
          <h3 className='status-info__title'>{title}</h3>
          <p className='status-info__text'>{info}</p>
        </div>
      </div>
    )
}


export default function BeskidStatusSlider() {
  const cardData = [
    {
      img: beskid1,
      month: 'Липень',
      title: 'BESKID HOME RESORT',
      info: '- здійснюються внутрішні ремонтні роботи у котеджі №2 (тип 1) - здійснюються електромонтажні роботи у котеджі №3 (тип 1)'
    },
    {
      img: beskid2,
      month: 'Липень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: west1,
      month: 'Липень',
      title: 'west town',
      info: '-у таунхаусах 13-24 (черга 8) - здійснюються фасадні роботи'
    },
    {
      img: west2,
      month: 'Липень',
      title: 'west town',
      info: ''
    }
  ]


  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={false}
        autoHeight={true}

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
        {cardData.map((item, index) => {
            return (
            <SwiperSlide>
              <SliderCard key={index} {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}
