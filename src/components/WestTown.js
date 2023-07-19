import { Swiper, SwiperSlide } from 'swiper/react';
import icons from '../assets/icons/west-icons.svg'
import Slider from './WestSlider';
import ContactForm from './ContactForm';
import './Complexes.scss'
import 'swiper/css';

function WestTown () {
    return (
        <div className='complex' id="west-town">
            <div className="complex__info">

                <div className='complex__info-slider'>
                <Slider />
                </div>

                <div className="complex__info-text complex__base-card">
                    <h3 className="info__title">West Town</h3>

                    <div className="text-container">
                        <p className="info-text">89 будинків введено в експлуатацію.</p>
                        <div className="sizes-container">
                            <p className="info__text"> - Площа 120 м2;</p>
                            <p className="info__text"> - Ділянка - від 1,65 сотих;</p>
                        </div>

                        <div className="info__container">
                            <svg className="text-icon">
                                <use href={icons + '#school'}/>
                            </svg>
                            <p className="info-text">Школа знаходиться в межах 700 м.</p>
                        </div>


                        <div className="info__container">
                            <svg className="text-icon">
                            <use href={icons + '#kindergarten'}/>
                            </svg>
                            <p className="info-text">Дитячий садочок знаходиться в межах 500 м.</p>
                        </div>


                        <div className="info__container">
                            <svg className="text-icon">
                                <use href={icons + '#lake'}/>
                            </svg>
                            <p className="info-text">До міського озера на будь-якому транспорті ви зможете дістатись всього за 10 хвилин.</p>
                        </div>

                        <div className="info__container">
                            <svg className="text-icon">
                                <use href={icons + '#building'}/>
                            </svg>
                            <p className="info-text">До центру міста за 20 хвилин.</p>
                        </div>

                        <div className="info__container">
                            <p className="info-text">Розтермінування до 24-х місяців.</p>
                        </div>
                    </div>
                </div>
            </div>

            <ContactForm title = 'Отримати розрахунок розтермінування'/>
        </div>
    )
}

export default WestTown