import React, { useState } from 'react'
import '../components/BuildingStatus.scss'
import WestStatusSlider from '../components/WestStatusSlider'
import FsLightbox from 'fslightbox-react'
import { motion } from 'framer-motion'

// import images

// queue14
import que14Aug1 from '../assets/images/build-status/west-status/queue14/aug1.webp'
import que14Aug2 from '../assets/images/build-status/west-status/queue14/aug2.webp'
import que14Aug3 from '../assets/images/build-status/west-status/queue14/aug3.webp'
import que14Aug4 from '../assets/images/build-status/west-status/queue14/aug4.webp'
import que14Aug5 from '../assets/images/build-status/west-status/queue14/aug5.webp'

//queue 13
import que13Apr1 from '../assets/images/build-status/west-status/queue13/apr1.webp'
import que13Apr2 from '../assets/images/build-status/west-status/queue13/apr2.webp'
import que13Apr3 from '../assets/images/build-status/west-status/queue13/apr3.webp'
import que13Apr4 from '../assets/images/build-status/west-status/queue13/apr4.webp'
import que13May1 from '../assets/images/build-status/west-status/queue13/may1.webp'
import que13May2 from '../assets/images/build-status/west-status/queue13/may2.webp'
import que13May3 from '../assets/images/build-status/west-status/queue13/may3.webp'
import que13May4 from '../assets/images/build-status/west-status/queue13/may4.webp'
import que13Jun1 from '../assets/images/build-status/west-status/queue13/jun1.webp'
import que13Jun2 from '../assets/images/build-status/west-status/queue13/jun2.webp'
import que13Jun3 from '../assets/images/build-status/west-status/queue13/jun3.webp'
import que13Jun4 from '../assets/images/build-status/west-status/queue13/jun4.webp'
import que13Aug1 from '../assets/images/build-status/west-status/queue13/august1.webp'
import que13Aug2 from '../assets/images/build-status/west-status/queue13/august2.webp'
import que13Aug3 from '../assets/images/build-status/west-status/queue13/august3.webp'
import que13Aug4 from '../assets/images/build-status/west-status/queue13/august4.webp'
import que13Aug5 from '../assets/images/build-status/west-status/queue13/august5.webp'
import que13Aug6 from '../assets/images/build-status/west-status/queue13/august6.webp'
import que13Augs1 from '../assets/images/build-status/west-status/queue13/aug1.webp'
import que13Augs2 from '../assets/images/build-status/west-status/queue13/aug2.webp'
import que13Augs3 from '../assets/images/build-status/west-status/queue13/aug3.webp'
import que13Augs4 from '../assets/images/build-status/west-status/queue13/aug4.webp'
import que13Augs5 from '../assets/images/build-status/west-status/queue13/aug5.webp'
import que13Augs6 from '../assets/images/build-status/west-status/queue13/aug6.webp'
import que13Augs7 from '../assets/images/build-status/west-status/queue13/aug7.webp'
import que13Augs8 from '../assets/images/build-status/west-status/queue13/aug8.webp'


  // cards data
const album14 = [
  {
    img: que14Aug1,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que14Aug2,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que14Aug3,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que14Aug4,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que14Aug5,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
]

const album13 = [
  {
    img: que13Augs1,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Augs2,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Augs3,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Augs4,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Augs5,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Augs6,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Augs7,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Augs8,
    month: 'Серпень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Aug1,
    month: 'Липень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Aug2,
    month: 'Липень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Aug3,
    month: 'Липень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Aug4,
    month: 'Липень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Aug5,
    month: 'Липень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Aug6,
    month: 'Липень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Jun1,
    month: 'Червень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Jun2,
    month: 'Червень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Jun3,
    month: 'Червень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Jun4,
    month: 'Червень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13May1,
    month: 'Травень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13May2,
    month: 'Травень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13May3,
    month: 'Травень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13May4,
    month: 'Травень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Apr1,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Apr2,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Apr3,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
  {
    img: que13Apr4,
    month: 'Квітень 2025',
    title: 'west town',
    info: ''
  },
]

function WestStatus() {
    const [togglerOne, setTogglerOne] = useState(false)
    const [togglerTwo, setTogglerTwo] = useState(false)
//====================================
    const [activeSlider, setActiveSlider] = useState(1)
    const showSlider = (sliderNumber) => {
        setActiveSlider(sliderNumber)
    }
//====================================

    return (
      <>
      <section className="build-status box" id='build-status'>
            <div className="wrapper">
                <div className="build-status__items">
                    <div className="build-status__item">
                        <h2 className="build-status__title main-title">Стани будівництва</h2>
                    </div>
                </div>

                <div className='build-status__slider'>
                    <div className='queue'>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 1 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(1)}>13 черга</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 2 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(2)}>14 черга</motion.button>
                    </div>
                    <div className={activeSlider === 1 ? '' : 'slider-hidden'} onClick={() => {setTogglerOne(!togglerOne)}}>
                        <WestStatusSlider photos={album13}/>
                    </div>
                    <div className={activeSlider === 2 ? '' : 'slider-hidden'} onClick={() => {setTogglerTwo(!togglerTwo)}}>
                        <WestStatusSlider photos={album14}/>
                    </div>
                </div>
            </div>
        </section>

        <FsLightbox 
          toggler={togglerOne}
          sources={[
            que13Augs1,
            que13Augs2,
            que13Augs3,
            que13Augs4,
            que13Augs5,
            que13Augs6,
            que13Augs7,
            que13Augs8,
            que13Aug1,
            que13Aug2,
            que13Aug3,
            que13Aug4,
            que13Aug5,
            que13Aug6,
            que13Jun1,
            que13Jun2,
            que13Jun3,
            que13Jun4,
            que13May1,
            que13May2,
            que13May3,
            que13May4,
            que13Apr1,
            que13Apr2,
            que13Apr3,
            que13Apr4,
          ]}
        />

        <FsLightbox 
          toggler={togglerTwo}
          sources={[
            que14Aug1,
            que14Aug2,
            que14Aug3,
            que14Aug4,
            que14Aug5,
          ]}
        />
        </>
    )
}

export default WestStatus