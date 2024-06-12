import './beached.css';
import avatar from '../../images/avatar.png';

const Beached = () => {
    return (
        <div className="beached container">
            <div className="container">
                <button type='submit' className="beached__button">Featured</button>
                <div className="beached__title">Beached to take you somewhere else</div>
                <div className="beached__profile">
                    <img className='beached-profile__img' src={avatar} alt="avatar" />
                    <p className="beached-profile__name">Farok Rastegar  .  1 hour ago</p>
                </div>
            </div>
        </div>
    )
}

export default Beached;