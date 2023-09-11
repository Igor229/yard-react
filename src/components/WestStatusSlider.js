import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './BuildStatusSlider.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

// import images
import west1 from '../assets/images/build-status/status-west1.jpg'
import west2 from '../assets/images/build-status/status-west2.jpg'
import west3 from '../assets/images/build-status/west3.jpg'
import west4 from '../assets/images/build-status/west4.jpg'
import west5 from '../assets/images/build-status/west5.jpg'
import west7 from '../assets/images/build-status/west7.jpg'
import west8 from '../assets/images/build-status/west8.jpg'
import west9 from '../assets/images/build-status/west9.jpg'



function SliderCard(props) {
  const {month, title, info, img, subinfo} = props
    return (
      <div>
        <img className='buildStatusImg' src={img} alt="west-town"/>
        <div className='status-info__container'>
          <p className='status-info__date'>{month}</p>
          <h3 className='status-info__title'>{title}</h3>
          <p className='status-info__text'>{info}</p>
          <p className='status-info__text'>{subinfo}</p>
        </div>
      </div>
    )
}

export default function WestStatusSlider() {

  // cards data
  const cardData = [
    {
      img: west3,
      month: 'Серпень',
      title: 'west town',
      info: '- Таунхауси 1-12 - триває монтаж деревʼяних балок дахового накриття з подальшим перекриттям металочерепицею.'
    },
    {
      img: west4,
      month: 'Серпень',
      title: 'west town',
      info: '- Таунхауси 13-24 - повністю готові.'
    },
    {
      img: west5,
      month: 'Серпень',
      title: 'west town',
      info: '- Таунхауси 13-24 - повністю готові.'
    },
    {
      img: west7,
      month: 'Серпень',
      title: 'west town',
      info: '- черга 9 (здача 2 квартал 2024 року).'
    },
    {
      img: west8,
      month: 'Серпень',
      title: 'west town',
      info: '- черга 9 (здача 2 квартал 2024 року).'
    },
    {
      img: west9,
      month: 'Серпень',
      title: 'west town',
      info: '- черга 9 (здача 2 квартал 2024 року).'
    },
    {
      img: west1,
      month: 'Липень',
      title: 'west town',
      info: '-у таунхаусах 13-24 (черга 8) - здійснюються фасадні роботи.'
    },
    {
      img: west2,
      month: 'Липень',
      title: 'west town',
      info: `- у таунхаусах 1-6 завершуються мурування зовнішніх та внутрішніх стін;`,
      subinfo: ' - у таунхаусах 7-12 - здійснюється перекриття даху.'
    }
  ]

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={false}
        autoHeight = {true}
        autoplay = {true}

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
