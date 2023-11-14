import './AdventageBox.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { FreeMode, Autoplay } from 'swiper/modules';

import adventagePlaceImg from '../assets/beskidPage/icons/adventages-icons/advantage-place.png'
import adventageSpaImg from '../assets/beskidPage/icons/adventages-icons/advantage-spa.png'
import adventageGasImg from '../assets/beskidPage/icons/adventages-icons/advantage-gas.png'
import adventageBuisnessImg from '../assets/beskidPage/icons/adventages-icons/advantage-buisness.png'

function AdventageBox (props) {
    const {icon, text} = props

    return (
        <div className='adventage-box'>
            <img src={icon} className='adventage-box__icon' alt='box-icon'/>
            <p className='adventage-box__text'>{text}</p>
        </div>
    )
}

const adventageData = [
    {
      icon: adventagePlaceImg,
      text: 'Розташування поблизу ГК Буковель - с.Поляниця, вигляд з котеджів на витяг 1R.'
    },
    {
      icon: adventageSpaImg,
      text: 'Комплекс матиме власну інфраструктуру - SPA-зону із сезонним басейном з підігрівом, що збільшуватиме приплив туристів.'
    },
    {
      icon: adventageGasImg,
      text: 'Будинки мають індивідуальне газове опалення, що є рідкістю в Карпатах.'
    },
    {
      icon: adventageBuisnessImg,
      text: 'Пасивний бізнес з прогнозованою окупністю до 7-8 років.'
    },
  ]

function Adventages () {
    return (
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={16}
            freeMode={true}
            pagination={false}
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
                1024: {
                  slidesPerView: 4,
                }
    
            }}
    
            modules={[FreeMode, Autoplay]}
            className="adventage-slider"
          >
              {adventageData.map((item, index) => {
                return (
                <SwiperSlide>
                  <AdventageBox key={index} {...item} />
                </SwiperSlide>)
              })}
          </Swiper>
        </>
      );
}

export default Adventages