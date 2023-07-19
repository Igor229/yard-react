import footerLogo from '../assets/images/footer-logo.png'
import icons from '../assets/icons/sprite.svg'
import './Footer.scss'

function Footer () {
    return (
        <footer className="footer">
        <div className="wrapper">
            <div className="footer__content">
                <div className="footer__content-items">
                    <div className="content__item footer__logo">
                        <a href="#main-container"><img src={footerLogo} alt="main-logo" className="content__item-logo"/></a>
                    </div>
                    <div className="content__item">
                        <h4 className="content__item-title">Наші комплекси</h4>
                        <a href="#west-town" className="content__item-text">WEST TOWN</a>
                        <a href="#beskid-resort" className="content__item-text">BESKID HOME RESORT</a>
                    </div>
                    <div className="content__item">
                        <h4 className="content__item-title">Контактна інформація</h4>
                        <p className="content__item-text">+380 (98) 22 55 800 (Viber, Telegram)</p>
                        <p className="content__item-text">yarddevelopment34@gmail.com</p>
                    </div>
                </div>

                <div className="footer__actions">
                    <p className="footer__actions-item">© 2023 | Всі права захищено</p>
                    <div className="footer__actions-socials">
                        <a href="https://www.instagram.com/yard.development/" target="_blank">
                            <svg className="social-icon">
                                <use href={icons + '#instagram'}/>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100093522396873" target="_blank">
                            <svg className="social-icon">
                                <use href={icons + '#facebook'}/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;