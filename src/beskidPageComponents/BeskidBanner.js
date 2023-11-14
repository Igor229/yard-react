import beskidLogo from '../assets/beskidPage/logos/beskidBannerLogo.png'
import './BeskidBanner.scss'

function BeskidBanner () {
    return (
        <section className="banner">
            <img src={beskidLogo} className='banner__logo'/>
        </section>
    )
}

export default BeskidBanner