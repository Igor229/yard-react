import './About.scss'
import MainVideoBGQuality from '../assets/videos/main-video.MP4'
import { motion } from 'framer-motion'

function About () {
    return (
        <motion.section className="about" id="main-container"
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.7}}
        >
            <div className='video-container'>
                <video src={MainVideoBGQuality} typeof='video/mp4' className='main-video' autoPlay playsInline loop muted/>
                <div className='text-container'>
                    <div className='wrapper'>
                        <motion.h1 className='text-container__title'
                            initial={{y: -70, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            Yard Development
                        </motion.h1>
                        <motion.p className='text-container__text'
                            initial={{y: -90, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            Будуємо котеджне містечко таунхаусів у <br/> Крихівцях - WEST TOWN 
                            та комплекс BESKID <br/> HOME RESORT у Буковелі.
                        </motion.p>

                        <motion.div className='text-container__actions'
                            initial={{y: -120, opacity: 0}}
                            whileInView={{y: 0, opacity: 1}}
                            transition={{duration: 0.5}}
                        >
                            <a href='#beskid-home'>
                                <motion.button className='about-button main-button'
                                    whileHover={{scale: 1.1}}
                                    transition={{duration: 0.01}}
                                >
                                    Beskid Home Resort
                                </motion.button>
                            </a>
                            <a href='#west-town'>
                                <motion.button className='about-button main-button active-button'
                                    whileHover={{scale: 1.1}}
                                    transition={{duration: 0.01}}
                                >
                                    West Town
                                </motion.button>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
    </motion.section>
    )
}

export default About