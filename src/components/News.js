
import './News.scss'

function News(props) {
    const {date, image, title, text} = props

    return (
        <div className="news__item box">
            <img className="news__item-image" src={image}/>
            <div className="news__item-info">
                <p className="news-date">{date}</p>
                <h3 className="news-title">{title}</h3>
                <p className="news-text">{text}</p>
            </div>
        </div>
    )
}

export default News