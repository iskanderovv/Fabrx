import './featured-articles-item.css';

const FeaturedArticlesItem = ({cardTitle, cardImage, cardAvatar}) => {
    return (
        <div className="articles__card">
            <img className="articles-card__img" src={cardImage} alt="featured-articles" />
            <h3 className="articles-card__title">{cardTitle}</h3>
            <div className="articles-card__profile">
                <img className='articles-card-profile__img' src={cardAvatar} alt="avatar" />
                <p className="articles-card-profile__text">Farok Rastegar  .  1 hour ago</p>
            </div>
            <p className="articles-card__info">
                On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of pleasure of the…
            </p>
        </div>
    )
}

export default FeaturedArticlesItem;