import './WestBanner.scss'
import '../beskidPageComponents/BeskidBanner.scss'
import { useState } from 'react'
import { motion } from 'framer-motion'
import mainImg from '../assets/westPage/images/west-banner.webp'
import mainImgPhone from '../assets/westPage/images/west_banner_phone.webp'
import ModalPlus from '../components/ModalPlus'

function WestBanner () {
    const [modalActive, setModalActive] = useState(false)
    return (
        <>
            <section className="banner west-banner">
                <ModalPlus active={modalActive} setActive={setModalActive}/>
                <img src={mainImg} className='banner__image west__banner-pc' alt='main-logo' />
                <img src={mainImgPhone} className='banner__image west__banner-phone' alt='main-logo' />
                <div className='banner__titles'> 
                    <motion.h3 className='banner__titles-subtitle'
                        initial={{y: -70, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        Містечко ТОП-1 - вибір серед таунхаусів Івано-Франківська
                    </motion.h3>
                    <motion.h1 className='banner__titles-main'
                        initial={{y: -90, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 0.5}}
                    >
                        WEST TOWN
                    </motion.h1>
                </div>
                <motion.button className='banner__action west-banner__action' onClick={() => setModalActive(true)}
                    transition={{duration: 0.05}}
                    whileHover={{scale: 1.03}}
                >
                    Обрати таунхаус
                </motion.button>
            </section>
        </>
    )
}

export default WestBanner