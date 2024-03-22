import './Feedbacks.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper/modules';

import OlexandrIcon from '../assets/icons/feedback-icons/Olexandr-icon.png'
import LiliyaIcon from '../assets/icons/feedback-icons/Liliya-icon.png'
import BogdanIcon from '../assets/icons/feedback-icons/Bogdan-icon.png'
import TarasIcon from '../assets/icons/feedback-icons/Taras-icon.png'
import NataliyaIcon from '../assets/icons/feedback-icons/Nataliya-icon.png'

const feedbackData = [
    {
        icon: OlexandrIcon,
        name: 'Олександр',
        text: 'Наприкінці весни ми побачили рекламу від West Town в соц.мережах і зацікавились цим варіантом. На наступний день поїхали на огляд таун-хаусів і одразу на місці було прийнято рішення про купівлю. Нас дуже вразили темпи і якість будівництва, а також планування і дизайн будинків. І не останню роль зіграло вдале місцерозташування містечка. З нетерпінням чекаємо на початок ремонту і переїзд до West Town.'
    },
    {
        icon: LiliyaIcon,
        name: 'Лілія',
        text: "Обрали WEST TOWN тому що: Зручне розташування ,поруч школа ,дитячий садок ,близько до магазинів ,і дуже спокійно) Чудовий дизайн будиночків ,нагадує Америку ) +Класна ціна за такий будинок з подвір’ям (заднім та переднім )Для сім’ї з дітками ідеально ) Безліч місця ) Ми дуже задоволені ♥"
    },
    {
        icon: BogdanIcon,
        name: 'Богдан',
        text: "Купівля танхаусу була чудовим рішенням. Задоволений розташуванням, функціональністю та простором. Особливо ціную можливість власного подвір'я та комфортне середовище для сімейного життя. Завжди є місце для паркування автомобіля. Ціна була одна з найнижчих в місті, можливість кредитування."
    },
    {
        icon: TarasIcon,
        name: 'Тарас',
        text: 'Ціна, якість, розташування, відповідальність та порядність будівельної компанії. Рекомендую!👌'
    },
    {
        icon: NataliyaIcon,
        name: 'Наталя',
        text: 'Обрали містечко Вест Таун, оскільки сподобалось все, починаючи від локації, закінчуючи ціною та вигідним розтермінування. Ми придбали таунхаус в розтермінування на 2 роки і сплачуємо за все готовий будинок, таким чином ми в безпеці та спокійні за своє житло. З нетерпінням чекаємо на ремонтні роботи у власному будинку.'
    },
]

function FeedbackCard(props) {
    const {icon, name, text} = props

    return (
        <div className='feedback'>
            <div className='feedback__info'>
                <img src={icon} className='feedback__info-icon' alt='feedback-icon'/>
                <p className='feedback__info-name'>{name}</p>
            </div>
            <p className='feedback__text'>{text}</p>
        </div>
    )
}


function Feedbacks () {
    return (
        <>
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            pagination={false}
            autoHeight = {true}
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
                1441: {
                    slidesPerView: 4,
                },
            }}

            modules={[FreeMode, Autoplay]}
            className="feedbackSlider"
            >
                {feedbackData.map((item, index) => {
                    return (
                    <SwiperSlide key={index}>
                        <FeedbackCard {...item} />
                    </SwiperSlide>)
                })}
            </Swiper>
        </>
    )
}

export default Feedbacks