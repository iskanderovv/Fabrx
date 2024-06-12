import './top-articles-item.css';
import avatar from '../../images/avatar.png';


const TopArticlesItem = ({ topArticlesTitle, topArticlesImage }) => {
    return (
        <div className="top-articles__card">
            <img src={topArticlesImage} className='top-articles-card__img' alt="" />
            <div className="top-articles-card__content">
                <h3 className="top-articles-card-content__title">{topArticlesTitle}</h3>
                <div className="top-articles-card-content__profile">
                    <img className='top-articles-card-content-profile__img' src={avatar} alt="avatar" />
                    <p className="top-articles-card-content-profile__name">Farok Rastegar  .  1 hour ago</p>
                </div>
                <p className="top-articles-card-content__info">
                    On the other hand, we denounce with righteous indignation and dislike men who
                    are so beguiled and demoralized by the charms of pleasure of the moment, so blinded
                    by desire, that they cannot foresee the pain a…
                </p>
            </div>
        </div>
    )
}

export default TopArticlesItem;