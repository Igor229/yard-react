import icons from '../assets/icons/besket-icons.svg'
import './PlanningType.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function PlanningType (props) {
    const {type, area, terrace, floorOne, floorTwo} = props

    return (
        <div className="card">
            {/* upper box with info */}
            <div className="card__item">
                <h3 className="card__item-title">{type}</h3>
                <div className="card__item-info">
                    
                    <div className="plan">
                        <div className='plan-container'>
                            <svg className='plan-container__icon'>
                                <use href={icons + '#terrace'}/>
                            </svg>
                            <p className='plan-container__text'>Площа:<br/> {area}</p>
                        </div>
                    </div>

                    <div className="plan">
                        <div className='plan-container'>
                            <svg className='plan-container__icon'>
                                <use href={icons + '#elevator'}/>
                            </svg>
                            <p className='plan-container__text'>Тераса:<br/> {terrace}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom box with image */}
            <div className='plan-slider'>
                <Swiper className='card__item-slider'>
                    <SwiperSlide><img src={floorOne} className='card__item-img' alt='type image'/></SwiperSlide>
                    <SwiperSlide><img src={floorTwo} className='card__item-img' alt='type image'/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default PlanningType