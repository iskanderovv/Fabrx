import './hero.css';
import avatar from '../../images/avatar.png';


const Hero = () => {
    return (
        <div className="hero">
            <div className="container">
                <div className="hero__content">
                    <h1 className='hero-content__title'>5 mind blowing facts about the iPhone 14</h1>
                    <div className="hero-content__profile">
                        <img className='hero-content-profile__img' src={avatar} alt="" />
                        <p className='hero-content-profile__text'>Farok Rastegar.  1 hour ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero