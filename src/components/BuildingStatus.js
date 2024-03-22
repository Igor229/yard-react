import React, { useState } from 'react'
import './BuildingStatus.scss'
import WestStatusSlider from './WestStatusSlider'
import BeskidStatusSlider from './BeskidStatusSlider'
import FsLightbox from 'fslightbox-react'
import { motion } from 'framer-motion'

// import images

// Queue 8
import november1 from '../assets/images/build-status/west-status/queue8/november1.png'
import november2 from '../assets/images/build-status/west-status/queue8/november2.png'
import november3 from '../assets/images/build-status/west-status/queue8/november3.jpg'
import november4 from '../assets/images/build-status/west-status/queue8/november4.png'
import november5 from '../assets/images/build-status/west-status/queue8/november5.jpg'
import november6 from '../assets/images/build-status/west-status/queue8/november6.jpg'
import west10 from '../assets/images/build-status/west-status/queue8/west10.jpg'
import west11 from '../assets/images/build-status/west-status/queue8/west11.jpg'
import west1 from '../assets/images/build-status/west-status/queue8/status-west1.jpg'
import west2 from '../assets/images/build-status/west-status/queue8/status-west2.jpg'
import west3 from '../assets/images/build-status/west-status/queue8/west3.jpg'
import west4 from '../assets/images/build-status/west-status/queue8/west4.jpg'
import west5 from '../assets/images/build-status/west-status/queue8/west5.jpg'
import december1 from '../assets/images/build-status/west-status/queue8/west12.jpg'
import december2 from '../assets/images/build-status/west-status/queue8/west13.jpg'
import february1 from '../assets/images/build-status/west-status/queue8/february1.jpg'
import february2 from '../assets/images/build-status/west-status/queue8/february2.jpg'
import february3 from '../assets/images/build-status/west-status/queue8/february3.jpg'
import february4 from '../assets/images/build-status/west-status/queue8/february4.jpg'
import march1 from '../assets/images/build-status/west-status/queue8/march1.jpg'
import march2 from '../assets/images/build-status/west-status/queue8/march2.jpg'
import march3 from '../assets/images/build-status/west-status/queue8/march3.jpg'

// Queue 9
import que9Img1 from '../assets/images/build-status/west-status/queue9/que9-1.jpg'
import que9Img2 from '../assets/images/build-status/west-status/queue9/que9-2.jpg'
import que9Img3 from '../assets/images/build-status/west-status/queue9/que9-3.jpg'
import que9Img4 from '../assets/images/build-status/west-status/queue9/que9-4.jpg'
import que9Img5 from '../assets/images/build-status/west-status/queue9/que9-5.jpg'
import que9Img6 from '../assets/images/build-status/west-status/queue9/que9-6.jpg'
import que9Img7 from '../assets/images/build-status/west-status/queue9/que9-7.jpg'
import que9Img8 from '../assets/images/build-status/west-status/queue9/que9-8.jpg'
import que9Img9 from '../assets/images/build-status/west-status/queue9/que9-9.jpg'
import que9Img10 from '../assets/images/build-status/west-status/queue9/que9-10.jpg'
import que9Img11 from '../assets/images/build-status/west-status/queue9/que9-11.jpg'
import que9Img12 from '../assets/images/build-status/west-status/queue9/que9-12.jpg'
import que9Img13 from '../assets/images/build-status/west-status/queue9/que9-13.jpg'
import west7 from '../assets/images/build-status/west-status/queue9/west7.jpg'
import west8 from '../assets/images/build-status/west-status/queue9/west8.jpg'
import west9 from '../assets/images/build-status/west-status/queue9/west9.jpg'
import west12 from '../assets/images/build-status/west-status/queue9/west12.jpg'
import west13 from '../assets/images/build-status/west-status/queue9/west13.jpg'
import que9Nov1 from '../assets/images/build-status/west-status/queue9/november1.jpg'
import que9Nov2 from '../assets/images/build-status/west-status/queue9/november2.jpg'
import que9Nov3 from '../assets/images/build-status/west-status/queue9/november3.jpg'
import que9Feb1 from '../assets/images/build-status/west-status/queue9/february1.jpg'
import que9Feb2 from '../assets/images/build-status/west-status/queue9/february2.jpg'
import que9March1 from '../assets/images/build-status/west-status/queue9/march1.jpg'
import que9March2 from '../assets/images/build-status/west-status/queue9/march2.jpg'
import que9March3 from '../assets/images/build-status/west-status/queue9/march3.jpg'
import que9March4 from '../assets/images/build-status/west-status/queue9/march4.jpg'
import que9March5 from '../assets/images/build-status/west-status/queue9/march5.jpg'

// Queue 10
import que10Img1 from '../assets/images/build-status/west-status/queue10/que10-1.jpg'
import que10Img2 from '../assets/images/build-status/west-status/queue10/que10-2.jpg'
import que10Img3 from '../assets/images/build-status/west-status/queue10/que10-3.jpg'
import que10Nov1 from '../assets/images/build-status/west-status/queue10/november1.jpg'
import que10Nov2 from '../assets/images/build-status/west-status/queue10/november2.jpg'
import que10Nov3 from '../assets/images/build-status/west-status/queue10/november3.jpg'
import que10Nov4 from '../assets/images/build-status/west-status/queue10/november4.jpg'
import que10Feb1 from '../assets/images/build-status/west-status/queue10/february1.jpg'
import que10Feb2 from '../assets/images/build-status/west-status/queue10/february2.jpg'
import que10March1 from '../assets/images/build-status/west-status/queue10/march1.jpg'
import que10March2 from '../assets/images/build-status/west-status/queue10/march2.jpg'
import que10March3 from '../assets/images/build-status/west-status/queue10/march3.jpg'
import que10March4 from '../assets/images/build-status/west-status/queue10/march4.jpg'


// Beskid
import beskid1 from '../assets/images/build-status/status-beskid1.jpg'
import beskid2 from '../assets/images/build-status/status-beskid2.jpg'
import beskid3 from '../assets/images/build-status/status-beskid3.jpg'
import beskid4 from '../assets/images/build-status/status-beskid4.jpg'
import beskidNovember1 from '../assets/images/build-status/beskid-status/beskid-november1-min.jpg'
import beskidNovember2 from '../assets/images/build-status/beskid-status/beskid-november2-min.jpg'
import beskidNovember3 from '../assets/images/build-status/beskid-status/beskid-november3-min.jpg'
import beskidNovember4 from '../assets/images/build-status/beskid-status/beskid-november4-min.jpg'
import beskidNovember5 from '../assets/images/build-status/beskid-status/beskid-november5-min.jpg'
import beskidNovember6 from '../assets/images/build-status/beskid-status/beskid-november6-min.jpg'

  // cards data
const album8 = [
  {
    img: march1,
    month: 'Березень',
    title: 'west town',
    info: 'здійснюється благоустрій прибудинкової території'
  },
  {
    img: march2,
    month: 'Березень',
    title: 'west town',
    info: 'здійснюється благоустрій прибудинкової території'
  },
  {
    img: march3,
    month: 'Березень',
    title: 'west town',
    info: 'здійснюється благоустрій прибудинкової території'
  },
  {
    img: february1,
    month: 'Лютий',
    title: 'west town',
    info: 'Виконується благоустрій прибудинкової території. Здійснюється укладання бруківки.'
  },
  {
    img: february2,
    month: 'Лютий',
    title: 'west town',
    info: 'Виконується благоустрій прибудинкової території. Здійснюється укладання бруківки.'
  },
  {
    img: february3,
    month: 'Лютий',
    title: 'west town',
    info: 'Виконується благоустрій прибудинкової території. Здійснюється укладання бруківки.'
  },
  {
    img: february4,
    month: 'Лютий',
    title: 'west town',
    info: 'Завершено встановлення вхідних дверей покращеного типу.'
  },
  {
    img: november5,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: november6,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: december2,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: december1,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: november1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: november2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: november3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: november4,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: west11,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west10,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west5,
    month: 'Жовтень',
    title: 'west town',
    info: '- Таунхауси 13-24 - повністю готові.'
  },
  {
    img: west4,
    month: 'Жовтень',
    title: 'west town',
    info: '- Таунхауси 13-24 - повністю готові.'
  },
  {
    img: west3,
    month: 'Жовтень',
    title: 'west town',
    info: '- Таунхауси 1-12 - триває монтаж деревʼяних балок дахового накриття з подальшим перекриттям металочерепицею.'
  },
  {
    img: west2,
    month: 'Жовтень',
    title: 'west town',
    info: `- у таунхаусах 1-6 завершуються мурування зовнішніх та внутрішніх стін;`,
    subinfo: ' - у таунхаусах 7-12 - здійснюється перекриття даху.'
  },
  {
    img: west1,
    month: 'Жовтень',
    title: 'west town',
    info: '-у таунхаусах 13-24 (черга 8) - здійснюються фасадні роботи.'
  },
]

const album9 = [
  {
    img: que9March1,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March2,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March3,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March4,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9March5,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Feb1,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que9Feb2,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que9Nov1,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Nov2,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Nov3,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img11,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img12,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img13,
    month: 'Грудень',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img4,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img5,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img6,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img7,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img8,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img9,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que9Img10,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: west13,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west12,
    month: 'Жовтень',
    title: 'west town',
    info: ''
  },
  {
    img: west9,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
  {
    img: west8,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
  {
    img: west7,
    month: 'Жовтень',
    title: 'west town',
    info: '- черга 9 (здача 2 квартал 2024 року).'
  },
]

const album10 = [
  {
    img: que10March1,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March2,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March3,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10March4,
    month: 'Березень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Feb1,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que10Feb2,
    month: 'Лютий',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov1,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov2,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov3,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Nov4,
    month: 'Січень',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img1,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img2,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
  {
    img: que10Img3,
    month: 'Листопад',
    title: 'west town',
    info: ''
  },
]


function BuildingStatus() {
    const [toggler, setToggler] = useState(false)
    const [togglerTwo, setTogglerTwo] = useState(false)
    const [togglerThree, setTogglerThree] = useState(false)
    const [togglerBeskid, setTogglerBeskid] = useState(false)
//====================================
    const [isActive, setIsActive] = useState(true)
    const handleClick = () => {
        setIsActive(!isActive)
    }
//====================================
    const [activeSlider, setActiveSlider] = useState(1)
    const showSlider = (sliderNumber) => {
        setActiveSlider(sliderNumber)
    }
//====================================
    const buttonClassActive = isActive ? "build-status__actions-button button-active" : "build-status__actions-button"
    const buttonClass = isActive ? "build-status__actions-button" : "build-status__actions-button  button-active"

    const westTypeActive = isActive ? 'build-status__slider slider-hidden' : 'build-status__slider'
    const beskidTypeActive = isActive ? 'build-status__slider' : 'build-status__slider slider-hidden'

    return (
      <>
      <section className="build-status box" id='build-status'>
            <div className="wrapper">
                <div className="build-status__items">
                    <div className="build-status__item">
                        <h2 className="build-status__title main-title">Стани будівництва</h2>
                        <div className="build-status__actions">
                            <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.1}} type="button" className={buttonClassActive} onClick={handleClick} id='wes-town__button'>WEST TOWN</motion.button>
                            <motion.button whileHover={{scale: 1.05}} transition={{duration: 0.1}} type="button" className={buttonClass} onClick={handleClick}>BESKID HOME RESORT</motion.button>
                        </div>
                    </div>
                </div>

                <div className={beskidTypeActive}>
                    <div className='queue'>
                      <p className='queue-title'>Черга:</p>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 1 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(1)}>8</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 2 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(2)}>9</motion.button>
                      <motion.button whileHover={{scale: 1.15}} transition={{duration: 0.1}} type='button' className={activeSlider === 3 ? 'queue-button--active' : 'queue-button'} onClick={() => showSlider(3)}>10</motion.button>
                    </div>
                    <div className={activeSlider === 1 ? '' : 'slider-hidden'} onClick={() => {setToggler(!toggler)}}>
                        <WestStatusSlider photos={album8}/>
                    </div>
                    <div className={activeSlider === 2 ? '' : 'slider-hidden'} onClick={() => {setTogglerTwo(!togglerTwo)}}>
                        <WestStatusSlider photos={album9}/>
                    </div>
                    <div className={activeSlider === 3 ? '' : 'slider-hidden'} onClick={() => {setTogglerThree(!togglerThree)}}>
                        <WestStatusSlider photos={album10}/>
                    </div>
                </div>

                <div className={westTypeActive} onClick={() => {setTogglerBeskid(!togglerBeskid)}}>
                    <BeskidStatusSlider/>
                </div>
            </div>
        </section>
        <FsLightbox 
          toggler={toggler}
          sources={[
            march1,march2,march3,february1,february2,february3,february4,november5,november6,december2,december1,november1,november2,november3,november4,
            west10,west11,west1,west2,west3,west4,west5,
          ]}
        />

        <FsLightbox 
          toggler={togglerTwo}
          sources={[
            que9March1,que9March2,que9March3,que9March4,que9March5,que9Feb1,que9Feb2,que9Nov1,que9Nov2,que9Nov3,que9Img11,que9Img12,que9Img13,que9Img1,que9Img2,que9Img3,que9Img4,que9Img5,que9Img6,que9Img7,que9Img8,que9Img9,que9Img10,
            west7,west8,west9,west10,west11,west12,west13,
          ]}
        />

        <FsLightbox 
          toggler={togglerThree}
          sources={[
            que10March1,
            que10March2,
            que10March3,
            que10March4,
            que10Feb1,
            que10Feb2,
            que10Nov1,
            que10Nov2,
            que10Nov3,
            que10Nov4,
            que10Img1,
            que10Img2,
            que10Img3,
          ]}
        />

        <FsLightbox 
          toggler={togglerBeskid}
          sources={[
            beskidNovember1,
            beskidNovember2,
            beskidNovember3,
            beskidNovember4,
            beskidNovember5,
            beskidNovember6,
            beskid3,
            beskid4,
            beskid2,
            beskid1,
          ]}
        />
        </>
    )
}

export default BuildingStatus