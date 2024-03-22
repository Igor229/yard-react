import './WestGallery.scss'
import FsLightbox from 'fslightbox-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../components/BuildStatusSlider.css';
import { FreeMode, Autoplay } from 'swiper/modules';
import { useState } from 'react';
import { motion } from 'framer-motion';

import image from '../assets/westPage/images/gallery-slider/0.jpg'
import image1 from '../assets/westPage/images/gallery-slider/1.jpg'
import image2 from '../assets/westPage/images/gallery-slider/2.jpg'
import image3 from '../assets/westPage/images/gallery-slider/3.jpg'
import image4 from '../assets/westPage/images/gallery-slider/4.jpg'
import image5 from '../assets/westPage/images/gallery-slider/5.jpg'
import image6 from '../assets/westPage/images/gallery-slider/6.jpg'
import image7 from '../assets/westPage/images/gallery-slider/7.jpg'
import image8 from '../assets/westPage/images/gallery-slider/8.jpg'
import image9 from '../assets/westPage/images/gallery-slider/9.jpg'
import image10 from '../assets/westPage/images/gallery-slider/10.jpg'
import image11 from '../assets/westPage/images/gallery-slider/11.jpg'
import image12 from '../assets/westPage/images/gallery-slider/12.jpg'

const westSliderData = [
    {
        image: image,
        src: 'gallery-image'
    },
    {
        image: image1,
        src: 'gallery-image'
    },
    {
        image: image2,
        src: 'gallery-image'
    },
    {
        image: image3,
        src: 'gallery-image'
    },
    {
        image: image4,
        src: 'gallery-image'
    },
    {
        image: image5,
        src: 'gallery-image'
    },
    {
        image: image6,
        src: 'gallery-image'
    },
    {
        image: image7,
        src: 'gallery-image'
    },
    {
        image: image8,
        src: 'gallery-image'
    },
    {
        image: image9,
        src: 'gallery-image'
    },
    {
        image: image10,
        src: 'gallery-image'
    },
    {
        image: image11,
        src: 'gallery-image'
    },
    {
        image: image12,
        src: 'gallery-image'
    },
]

function SliderPhoto(props) {
    const {image, alt} = props
    return (
        <motion.div className="news__item box"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6}}
        >
            <img className="news__item-image west-gallery__img" src={image} alt={alt}/>
        </motion.div>
    )
}

export default function WestGallery() {
    const [toggler, setToggler] = useState(false)
    return (
        <>
            <div className='wrapper title-container box'>
                <h1 className='main-title'>Фотогалерея</h1>
                <Swiper
                slidesPerView={3}
                spaceBetween={0}
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

                }}

                modules={[FreeMode, Autoplay]}
                className="west-gallery__slider"
                >
                    {westSliderData.map((item, index) => {
                    return (
                    <SwiperSlide onClick={() => {setToggler(!toggler)}} >
                        <SliderPhoto key={index} {...item} />
                    </SwiperSlide>)
                    })}
                </Swiper>
            </div>

            <FsLightbox
                toggler={toggler}
                sources={[
                    image,
                    image1,
                    image2,
                    image3,
                    image4,
                    image5,
                    image6,
                    image7,
                    image8,
                    image9,
                    image10,
                    image11,
                    image12,
                ]}
            />
        </>
    );
}