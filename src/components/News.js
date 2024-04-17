import { Swiper, SwiperSlide } from 'swiper/react';
import './BuildStatusSlider.css';
import './News.scss'
import { FreeMode, Autoplay } from 'swiper/modules';
import westTownNewsImg from '../assets/images/news/west-town_news.webp'
import spaNewsImg from '../assets/images/news/spa-news.webp'
import beskedNewsImage from '../assets/images/news/besked-news.webp'
import alternateTown from '../assets/images/news/alternateTown.webp'
import gasHeating from '../assets/images/news/gas-heating.webp'
import specialOffer from '../assets/images/news/special-offer.webp'
import westNovemberOffer from '../assets/images/news/west-town-sale11.webp'
import startFebruarySaleImg from '../assets/images/news/startQue8Sale.webp'
import easterImg from '../assets/images/news/easter.webp'



function SliderCard(props) {
  
const {date, image, title, text, subtitle} = props
    return (
    <div className="news__item box">
        <img className="news__item-image" src={image}/>
        <div className="news__item-info">
            <p className="news-date">{date}</p>
            <h3 className="news-title">{title}</h3>
            <h2 className="news-text">{subtitle}</h2>
            <p className="news-text">{text}</p>
        </div>
    </div>
    )
}


export default function News() {

  // cards data
  const cardData = [
    {
      image: easterImg,
      date:'12.04.24',
      title: "Акція до Великодніх свят!",
      subtitle: '',
      text: "Придбайте таунхаус у містечку WEST TOWN ДО 03.05.2024 та отримайте газовий гриль У ПОДАРУНОК на власне подвір'я.",
    },
    {
      image: startFebruarySaleImg,
      date:'20.02.24',
      title: " 8 ЧЕРГА WEST TOWN ВЖЕ НА СТАДІЇ ЗДАЧІ В ЕКСПЛУАТАЦІЮ",
      subtitle: '',
      text: "Хочемо повідомити, що 8 черга будівництва містечка WEST TOWN вже в процесі введення в експлуатацію! Зовсім скоро мешканці зможуть приступати до ремонтних робіт. На даний момент здійснюються роботи по благоустрою прибудинкової території - здійснюється укладання бруківки. В усіх будинках вже встановлені вхідні броньовані двері покращеного типу нового зразка. ВАЖЛИВО - до 8 черги WEST TOWN вже підведено ГАЗ!",
    },
    {
      image: westNovemberOffer,
      date:'25.01.24',
      title: "СТАРТ ПРОДАЖУ WEST TOWN 11",
      subtitle: '',
      text: "Стартував продаж таунхаусів у новій черзі будівництва - WEST TOWN 11. Діє акційна пропозиція для перших трьох покупців - 30 місяців безвідсоткового розтермінування. Здача нової черги будівництва запланована на 2-ий квартал 2025 року.",
    },
    {
      image: specialOffer,
      date:'15.11.23',
      title: "АКЦІЙНІ ПРОПОЗИЦІЇ У МІСТЕЧКУ WEST TOWN",
      subtitle: '',
      text: "У містечку таунхаусів WEST TOWN діють вигідні АКЦІЙНІ ПРОПОЗИЦІЇ - ціна таунхауса на розтермінування дорівнює ціні 100% оплати, а також ви отримуєте ДИЗАЙН-ПРОЕКТ у подарунок! Акції діють до Нового року! Встигніть скористатись пропозицією!",
    },
    {
      image: gasHeating,
      date:'15.11.23',
      title: "Газове опалення у BESKID HOME RESORT",
      subtitle: 'У комплексі BESKID HOME RESORT буде газове опалення!',
      text: "Газове опалення у Карпатах - це рідкість та водночас «розкіш», оскільки має багато переваг, як для власників нерухомості, так і для майбутніх мешканців: не залежить від перебоїв світла, економніше, є можливість дистанційного налаштування - smart-технології, двоконтурні котли дозволяють не тільки обігрівати будинок, але й підігрівають воду.",
    },
    {
        image: alternateTown,
        date:'10.09.23',
        title: "Таунхаус, як альтернатива квартирі - тільки краще, адже вони мають приватне подвір'я!",
        text: "Таунхаус - це відмінна альтернатива 3-кімнатній квартирі, тільки тут значною перевагою є наявність власного подвір'я, де ви зможете гратись з дітками на свіжому повітрі, пити свою ранкову каву та насолоджуватись заходами сонця чи світанком або ж влаштувати вечірку-барбекю з друзями. Наші таунхауси мають ділянку від 1,65 до 2,5 сотих.",
    },
    {
        image: westTownNewsImg,
        date:'29.06.23',
        title: 'Старт продажу нової черги (№9) у містечку WEST TOWN',
        text: "Стартував продаж таунхаусів у черзі №9 у найбільшому котеджному містечку таунхаусів WEST TOWN! У даній черзі можна придбати внутрішні та крайні таунхауси, як і у попередніх чергах. Доступні до продажу 24 таунхауси. Станьте частинкою нашого великого котеджного містечка WEST TOWN!",
    },
    {
        image: spaNewsImg,
        date:'15.05.23',
        title: 'Чудова новина для мешканців комплексу BESKID HOME RESORT',
        text: "Комплекс матиме власну відпочинкову SPA-зону, яка сприятиме покращенню вашого самопочуття, а також зробить ваш відпочинок у нас незабутнім! Сезонний басейн із підігрівом, критий басейн, сауна, хамам та тропічний душ - все це зовсім незабаром у нашому комплексі.",
    },
    {
        image: beskedNewsImage,
        date:'15.05.23',
        title: 'Що нового у комплексі BESKID HOME RESORT?',
        text: "- на даний момент вже збудовані повністю три котеджі ТИПУ 1, надалі приступаємо до будівництва котеджу №4 ТИПУ 2; - розпочинаємо будівництво SPA-зони; - розпочинаємо дорожні роботи для ще зручнішого заїзду до містечка.",
    }
  ]

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
            1440: {
              slidesPerView: 4,
          },

        }}

        modules={[FreeMode, Autoplay]}
        className="buildStatusSlider"
      >
          {cardData.map((item, index) => {
            return (
            <SwiperSlide key={index}>
              <SliderCard {...item} />
            </SwiperSlide>)
          })}
      </Swiper>
    </>
  );
}
