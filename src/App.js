import Header from './components/Header';
import About from './components/About';
import Beskid from './components/Beskid';
import WestTown from './components/WestTown';
import Footer from './components/Footer';
import News from './components/News';
import BuildingStatus from './components/BuildingStatus';
import Map from './components/Map';

import './style.scss'

import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)

function App() {
  const main = useRef()

  useLayoutEffect(() => {
    const ctx = gsap.context((self) => {
      const boxes = self.selector('.box')
      boxes.forEach((box) => {
        gsap.fromTo(box, {y: 44, opacity: 0}, {y: 0, opacity: 1, duration: .5, scrollTrigger: {
          trigger: box,
        }})
      });
    }, main)

    return () => ctx.revert()
  }, [])


  return (
    <main ref={main}>
      <Header />
      <About />

      <section className='complexes'>
        <div className='wrapper'>
          <h2 className='main-title'>Наші комплекси</h2>
          <div className='complexes__items'>
              <Beskid />
              <WestTown />
          </div>
        </div>
      </section>

      <BuildingStatus/>

      <section className='news' id='news'>
        <div className='wrapper'>
          <h2 className='main-title box'>Новини</h2>
          <div className='news__container box'>
            <News/>
          </div>
        </div>
      </section>

      <Map />
      <Footer />
    </main>
  );
}

export default App;
