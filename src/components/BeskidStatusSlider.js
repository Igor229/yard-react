import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import './BuildStatusSlider.css';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

import beskid1 from '../assets/images/build-status/status-beskid1.jpg'
import beskid2 from '../assets/images/build-status/status-beskid2.jpg'
import beskid3 from '../assets/images/build-status/status-beskid3.jpg'
import beskid4 from '../assets/images/build-status/status-beskid4.jpg'
// beskid compressed photos
import beskidNovember1 from '../assets/images/build-status/beskid-status/beskid-november1-min.jpg'
import beskidNovember2 from '../assets/images/build-status/beskid-status/beskid-november2-min.jpg'
import beskidNovember3 from '../assets/images/build-status/beskid-status/beskid-november3-min.jpg'
import beskidNovember4 from '../assets/images/build-status/beskid-status/beskid-november4-min.jpg'
import beskidNovember5 from '../assets/images/build-status/beskid-status/beskid-november5-min.jpg'
import beskidNovember6 from '../assets/images/build-status/beskid-status/beskid-november6-min.jpg'
import beskidApril1 from '../assets/images/build-status/beskid-status/beskid-april1.jpg'
import beskidApril2 from '../assets/images/build-status/beskid-status/beskid-april2.jpg'
import beskidApril3 from '../assets/images/build-status/beskid-status/beskid-april3.jpg'
import beskidApril4 from '../assets/images/build-status/beskid-status/beskid-april4.jpg'
import beskidApril5 from '../assets/images/build-status/beskid-status/beskid-april5.jpg'
import beskidApril6 from '../assets/images/build-status/beskid-status/beskid-april6.jpg'
import beskidApril7 from '../assets/images/build-status/beskid-status/beskid-april7.jpg'
import beskidApril8 from '../assets/images/build-status/beskid-status/beskid-april8.jpg'
import beskidApril9 from '../assets/images/build-status/beskid-status/beskid-april9.jpg'

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


export default function BeskidStatusSlider() {
  const cardData = [
    {
      img: beskidApril1,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidApril2,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidApril3,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidApril4,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidApril5,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidApril6,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidApril7,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidApril8,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidApril9,
      month: 'Квітень',
      title: 'BESKID HOME RESORT',
      info: ''
    },
    {
      img: beskidNovember1,
      month: 'Січень',
      title: 'BESKID HOME RESORT',
      info: '- КОТЕДЖ №2 - (січень) - виконуються внутрішні ремонтні роботи.'
    },
    {
      img: beskidNovember2,
      month: 'Січень',
      title: 'BESKID HOME RESORT',
      info: '- КОТЕДЖ №3 - (січень) - виконуються внутрішні ремонтні роботи.'
    },
    {
      img: beskidNovember3,
      month: 'Січень',
      title: 'BESKID HOME RESORT',
      info: '- стан будівництва за січень котеджі №4-9.'
    },
    {
      img: beskidNovember4,
      month: 'Січень',
      title: 'BESKID HOME RESORT',
      info: '- стан будівництва за січень котеджі №4-9.'
    },
    {
      img: beskidNovember5,
      month: 'Січень',
      title: 'BESKID HOME RESORT',
      info: '- стан будівництва за січень котеджі №4-9.'
    },
    {
      img: beskidNovember6,
      month: 'Січень',
      title: 'BESKID HOME RESORT',
      info: '- стан будівництва за січень котеджі №4-9.'
    },
    {
      img: beskid3,
      month: 'Серпень',
      title: 'BESKID HOME RESORT',
      info: '- завершення фасадних робіт, монтаж перил та балконів у будинку №3.'
    },
    {
      img: beskid4,
      month: 'Серпень',
      title: 'BESKID HOME RESORT',
      info: '-  встановлення підпірних колон під монолітну плиту - будинок №4-7.'
    },
    {
      img: beskid1,
      month: 'Липень',
      title: 'BESKID HOME RESORT',
      info: '- здійснюються внутрішні ремонтні роботи у котеджі №2 (тип 1).'
    },
    {
      img: beskid2,
      month: 'Липень',
      title: 'BESKID HOME RESORT',
      info: '- здійснюються електромонтажні роботи у котеджі №3 (тип 1).'
    },
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
            <SwiperSlide key={index}>
              <SliderCard {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}
