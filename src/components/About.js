import './About.scss'
import MainVideoBG from '../assets/videos/main-video.MP4'
import MainVideoBGQuality from '../assets/videos/main-video_better-quality.MP4'

function About () {
    return (
        <section className="about" id="main-container">
            <div className='video-container'>
                <video src={MainVideoBGQuality} typeof='video/mp4' className='main-video' autoPlay playsInline loop muted/>
            </div>
        <div className="about__content">
            <h1 className="about__content-title">YARD DEVELOPMENT</h1>
            <p className="about__content-text">
                Понад 89 будинків введено в експлуатацію. Дбаємо <br/> про ваш комфорт та затишок!
            </p>
        </div>
    </section>
    )
}

export default About