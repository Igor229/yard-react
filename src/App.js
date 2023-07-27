import Header from './components/Header';
import About from './components/About';
import Beskid from './components/Beskid';
import WestTown from './components/WestTown';
import Footer from './components/Footer';
import News from './components/News';
import BuildingStatus from './components/BuildingStatus';
import Map from './components/Map';

import westTownNewsImg from './assets/images/news/west-town_news.jpg'
import spaNewsImg from './assets/images/news/spa-news.jpg'
import beskedNewsImage from './assets/images/news/besked-news.jpg'
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
            <News
              image = {westTownNewsImg}
              date ='29.06.23' 
              title = 'Старт продажу нової черги (№9) у містечку WEST TOWN'
              text = "Стартував продаж таунхаусів у черзі №9 у найбільшому котеджному містечку таунхаусів WEST TOWN! У даній черзі можна придбати внутрішні та крайні таунхауси, як і у попередніх чергах. Доступні до продажу 24 таунхауси. Станьте частинкою нашого великого котеджного містечка WEST TOWN!"
            />
            <News
              image = {spaNewsImg}
              date = '15.05.2023'
              title = 'Чудова новина для мешканців комплексу BESKID HOME RESORT'
              text = 'Комплекс матиме власну відпочинкову SPA-зону, яка сприятиме покращенню вашого самопочуття, а також зробить ваш відпочинок у нас незабутнім! Сезонний басейн із підігрівом, критий басейн, сауна, хамам та тропічний душ - все це зовсім незабаром у нашому комплексі.'
            />
            <News
              image = {beskedNewsImage}
              date = '15.05.2023'
              title = 'Що нового у комплексі BESKID HOME RESORT?'
              text = '- на даний момент вже збудовані повністю три котеджі ТИПУ 1, надалі приступаємо до будівництва котеджу №4 ТИПУ 2; - розпочинаємо будівництво SPA-зони; - розпочинаємо дорожні роботи для ще зручнішого заїзду до містечка.'
            />
          </div>
        </div>
      </section>

      <Map />
      <Footer />
    </main>
  );
}

export default App;
