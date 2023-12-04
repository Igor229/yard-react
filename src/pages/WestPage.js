import WestBanner from '../westPageComponents/WestBanner';
import MainSlider from '../westPageComponents/MainSlider';
import WestAdventages from '../westPageComponents/WestAdventages';
import WestPlanningType from '../westPageComponents/WestPlanningType';
import AdventageList from '../westPageComponents/AdventageList';
import HouseType from '../westPageComponents/HouseType';
import WestForm from '../westPageComponents/WestForm';
import WestGallery from '../westPageComponents/WestGallery';

import './WestPage.scss'
import icons from '../assets/icons/sprite.svg'
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import phoneIcon from '../assets/beskidPage/icons/contacts-icons/phone.png'
import instagramIcon from '../assets/beskidPage/icons/contacts-icons/instagram.png'
import mailIcon from '../assets/beskidPage/icons/contacts-icons/mail.png'
import mapIcon from '../assets/beskidPage/icons/contacts-icons/map.png'
import BeskedMap from '../beskidPageComponents/BeskedMap';
import Modal from '../components/Modal';
import '../beskidPageComponents/Contacts.scss'

import internalTypeImg from '../assets/westPage/images/house-types/internal.png'
import externalTypeImg from '../assets/westPage/images/house-types/external.png'

function WestPage () {
    const [modalActive, setModalActive] = useState(false) 
  
    return (
      <main>
        <Modal active={modalActive} setActive={setModalActive}/>
        <motion.div className='banner-animation'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.7}}
        >
          <WestBanner/>
        </motion.div>
        
        <motion.div className='west-action'
          initial={{x: -350}}
          whileInView={{x: 0}}
          transition={{duration: 0.45}}
        >
          <motion.div className='action wrapper' whileHover={{scale: 1.1, duration: 0.01}}>
            <svg className="action-icon">
              <use href={icons + '#chevron-left'}/>
            </svg>
            <a href='#' className='action-text'>На головну</a>
          </motion.div>
        </motion.div>


        {/* Main Slider Block */}
          <motion.div className='wrapper west-info info-container'
            initial={{opacity: 0, y: 100, scale: 0.9}}
            whileInView={{opacity: 1, y: 0, scale: 1}}
            transition={{duration: 0.37}}
          >
            <MainSlider/>
          </motion.div>

        {/* Adventages Images */}
        <motion.div className='wrapper title-container box'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8}}
        >
          <h1 className='main-title'>У містечку WEST TOWN ви купуєте не тільки таунхаус</h1>
        </motion.div>
        <motion.div className='wrapper box'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8}}
        >
          <WestAdventages/>
        </motion.div>

        {/* House Types */}
        <motion.div className='wrapper title-container box'
          initial={{y: 150, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <h1 className='main-title'>У нашому містечку ви можете обрати таунхаус</h1>
        </motion.div>
        <motion.div className='wrapper houses'
          initial={{y: 150, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.6}}
        >
          <HouseType image={internalTypeImg} type='Внутрішній' rooms='4' square='120 м²' area='1,65-1,8 сотих'/>
          <HouseType image={externalTypeImg} type='Крайній' rooms='4' square='120 м²' area='2,5-2,8 сотих'/>
        </motion.div>

        {/* Planning Types Section */}
        <motion.div className='wrapper '
          initial={{x: -350}}
          whileInView={{x: 0}}
          transition={{duration: 0.45}}
        >
          <WestPlanningType/>
        </motion.div>

        <motion.div className='bedroom box'
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.7}}
        >
          <div className='bedroom-container'>
            <h2 className='bedroom-container__title'>ДИЗАЙН-ПРОЕКТ У ПОДАРУНОК <br/>ПРИ КУПІВЛІ ТАУНХАУСА</h2>
          </div>
        </motion.div>


        {/* Adventages List section */}
        <div className='wrapper title-container box'>
          <h1 className='main-title'>Переваги</h1>
        </div>
        <div className='wrapper box'>
          <AdventageList/>
        </div>
        
        <motion.div className='wrapper title-container box'
          initial={{y: 100, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}
        >
          <h1 className='main-title'>ВИГІДНІ УМОВИ РОЗТЕРМІНУВАННЯ ДО 2-Х РОКІВ</h1>
        </motion.div>
        <motion.div className='wrapper termination-form'
          initial={{y: 120, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.5}}
        >
          <p className='termination-form__subtitle'>Заповність форму та отримайте детальний <br/> розрахунок розтермінування.</p>
          <WestForm/>
        </motion.div>

        <WestGallery/>
        
         {/* <Contacts/> */}
         <section className='contacts'>  
            <div className='contacts-container'>
                <div className='contacts__item'>
                    <img src={phoneIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Номер телефону:</p>
                        <p className='contacts-subtitle'>+38 (098) 225 58 00 </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={instagramIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Instagram:</p>
                        <p className='contacts-subtitle'>west_town_if</p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={mailIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Email:</p>
                        <p className='contacts-subtitle'>yarddevelopment34@gmail.com </p>
                    </div>
                </div>

                <div className='contacts__item'>
                    <img src={mapIcon} className='contacts__item-icon'/>
                    <div className='contacts__item-info'>
                        <p className='contacts-title'>Локація:</p>
                        <p className='contacts-subtitle'>с. Крихівці, вулиця Бузкова</p>
                    </div>
                </div>
                <button className='main-button contacts-button' onClick={() => setModalActive(true)}>Отримати детальну інформацію</button>
            </div>
                <BeskedMap/>
        </section>

      </main>
    );
  }
  
  export default WestPage