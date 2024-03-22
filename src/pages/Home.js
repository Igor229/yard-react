import About from '../components/About';
import Beskid from '../components/Beskid';
import WestTown from '../components/WestTown';
import Feedbacks from '../components/Feedbacks';
import News from '../components/News';
import BuildingStatus from '../components/BuildingStatus';
import Map from '../components/Map';
import { motion } from 'framer-motion';
import Header from '../components/Header';

import React, { useRef } from 'react';
//====================================
function Home () {

  return (
    <>
    <Header/>
    <main>
      <About />

      <motion.section className='complexes'
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
        <div className='wrapper'>
          <h2 className='main-title'>Наші комплекси</h2>          
            <div className='complexes__items'>
              <motion.div
                initial={{opacity: 0, y: 100, scale: 0.9}}
                whileInView={{opacity: 1, y: 0, scale: 1}}
                transition={{duration: 0.37}}
              >
                <WestTown />
              </motion.div>
              <motion.div
                initial={{opacity: 0, y: 100, scale: 0.9}}
                whileInView={{opacity: 1, y: 0, scale: 1}}
                transition={{duration: 0.37}}
              >
                <Beskid /> 
              </motion.div>
            </div>       
        </div>
      </motion.section>

      <motion.div className='feedbacks wrapper'
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
        <h2 className='main-title'>Відгуки наших клієнтів</h2>
        <Feedbacks/>
      </motion.div>
      <motion.div
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
      <BuildingStatus/>
      </motion.div>
      <motion.section className='news' id='news'
        initial={{opacity: 0, y: 100, scale: 0.9}}
        whileInView={{opacity: 1, y: 0, scale: 1}}
        transition={{duration: 0.37}}
      >
        <motion.div className='wrapper'
          initial={{opacity: 0, y: 100, scale: 0.9}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          transition={{duration: 0.37}}
        >
          <h2 className='main-title box'>Новини</h2>
          <div className='news__container box' id='news'>
            <News/>
          </div>
        </motion.div>
      </motion.section>

      <Map />
    </main>
    </>
  );
}

export default Home;
