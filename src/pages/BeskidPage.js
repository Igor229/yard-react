import BeskidBanner from '../beskidPageComponents/BeskidBanner';
import mapPinIcon from '../assets/beskidPage/icons/map-pin.png'
import icons from '../assets/icons/sprite.svg'
import FirstSlider from '../beskidPageComponents/FirstSlider';
import SecondSlider from '../beskidPageComponents/SecondSlider';
import PlanningType from '../beskidPageComponents/PlanningType';
import Contacts from '../beskidPageComponents/Contacts';
import Adventages from '../beskidPageComponents/Adventages';

import './BeskidPage.scss'
import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import typeOneFloorOne from '../assets/beskidPage/images/planning-types/resized/type1-floor1.png'
import typeOneFloorTwo from '../assets/beskidPage/images/planning-types/resized/type1-floor2.png'
import typeTwoFloorOne from '../assets/beskidPage/images/planning-types/resized/type2-floor1.png'
import typeTwoFloorTwo from '../assets/beskidPage/images/planning-types/resized/type2-floor2.png'

gsap.registerPlugin(ScrollTrigger)

function BeskidPage () {
    const main = useRef()
  
    useLayoutEffect(() => {
      const ctx = gsap.context((self) => {
        const boxes = self.selector('.box')
        const banners = self.selector('.banner-animation')
        boxes.forEach((box) => {
          gsap.fromTo(box, {y: 44, opacity: 0}, {y: 0, opacity: 1, duration: .5, scrollTrigger: {
            trigger: box,
          }})

          banners.forEach((banner) => {
            gsap.fromTo(banner, {opacity: 0}, {opacity: 1, duration: .5})
          })
        });
      }, main)
  
      return () => ctx.revert()
    }, [])
  
  
    return (
      <main ref={main}>
        <div className='banner-animation'>
          <BeskidBanner/>
        </div>

        {/* titles and actions */}
        <div className='wrapper title-container box'>
          <div className='action'>
            <svg className="action-icon">
              <use href={icons + '#chevron-left'}/>
            </svg>
            <a href='/' className='action-text'>На головну</a>
          </div>

          <h1 className='title'>Котеджне містечко у самому серці Карпат</h1>

          <div className='location'>
            <img src={mapPinIcon} className='location-icon' />
            <p className='location-text'>Буковель</p>
          </div>
        </div>

        {/* sliders and text section */}
        <div className='info wrapper'>
          <div className='info-container box'>
            <FirstSlider/>
            <div className='info-description'>
              <h2 className='info-description__title'>BESKID HOME RESORT</h2>
              <p className='info-description__text'>
                Унікальний котеджний комплекс в самому серці Карпат з власною SPA-зоною та басейном. 
                Котеджі розташовані на вершині поблизу карпатського лісу, 
                а з тераси та вікон відкривається дивовижний краєвид на підйомник 
                1R гірськолижного курорту Bukovel.
              </p>
            </div>
          </div>

          <div className='info-container second-slider__container box'>
            <div className='info-description'>
              <h2 className='info-description__title'>КОТЕДЖІ З АВТОРСЬКИМ РЕМОНТОМ</h2>

              <p className='info-description__text'>
                Котеджі BESKID продаються з сучасним авторським ремонтом "під ключ", 
                в якому поєднуються елементи етнічності, що додає певного карпатського колориту! 
                Вони укомплектовані усією необхідною побутовою технікою та меблями, 
                які будуть потрібні для проживання.
              </p>

              <button className='info-description__button main-button'><a href='#'>Отримати детальну інформацію</a></button>
            </div>

            <SecondSlider/>
          </div>
        </div>

        <div className='wrapper title-container box'>
          <h1 className='title'>Планування котеджів BESKID</h1>
        </div>

        {/* planning types section */}
        <div className='plannings-type wrapper box'>
          <PlanningType type='Тип 1' area='117,94 м²' terrace='16,90 м²' floorOne={typeOneFloorOne} floorTwo={typeOneFloorTwo}/>
          <PlanningType type='Тип 2' area='121,74 м²' terrace='27,90 м²' floorOne={typeTwoFloorOne} floorTwo={typeTwoFloorTwo}/>
        </div>

        <div className='wrapper title-container box'>
          <h1 className='title'>Чому варто інвестувати саме у BESKID HOME RESORT?</h1>
        </div>

        {/* adventages section */}
        <div className='adventages wrapper box'>
          <Adventages/>
        </div>

        <div className='wrapper title-container box'>
          <h1 className='title'>Контактна інформація</h1>
        </div>
        
        <Contacts/>
      </main>
    );
  }
  
  export default BeskidPage