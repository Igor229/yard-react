import './YouTubeVideo.scss'

function YouTubeVideo() {
    return (
        <section className="youtube-video">
            <h2 className="main-title">Оглядовий котедж</h2>
            <div className="youtube-video__container">
                <iframe className='youtube-video__beskid' src="https://www.youtube.com/embed/Qq_390HnoS0" title="YouTube video player" frameBorder='none' allowfullscreen='allowfullscreen'></iframe>
            </div>
        </section>
    )
}

export default YouTubeVideo