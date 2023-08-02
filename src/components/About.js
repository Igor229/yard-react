import './About.scss'
import MainVideoBGQuality from '../assets/videos/main-video_better-quality.MP4'

function About () {
    return (
        <section className="about" id="main-container">
            <div className='video-container'>
                <video src={MainVideoBGQuality} poster typeof='video/mp4' className='main-video' autoPlay playsInline loop muted/>
            </div>
        <div className="about__content">
            <h1 className="about__content-title box">YARD DEVELOPMENT</h1>
            <p className="about__content-text box">
                Понад 89 будинків введено в експлуатацію. <br/> Дбаємо про ваш комфорт та затишок!
            </p>
        </div>
    </section>
    )
}

export default About