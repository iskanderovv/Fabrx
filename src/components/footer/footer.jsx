import './footer.css';
import logoo from '../../images/logoo.svg';
import facebook from '../../images/facebook.svg';
import insta from '../../images/insta.svg';
import be from '../../images/be.svg';
import twitter from '../../images/twitter.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <ul className="footer__list">
                    <li className="footer__item">First Column</li>
                    <li className="footer__item">
                        <a href="#">Link One</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Two</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Three</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Four</a>
                    </li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__item">Second Column</li>
                    <li className="footer__item">
                        <a href="#">Link One</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Two</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Three</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Four</a>
                    </li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__item">Third Column</li>
                    <li className="footer__item">
                        <a href="#">Link One</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Two</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Three</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Four</a>
                    </li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__item">Four Column</li>
                    <li className="footer__item">
                        <a href="#">Link One</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Two</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Three</a>
                    </li>
                    <li className="footer__item">
                        <a href="#">Link Four</a>
                    </li>
                </ul>
                <div className='footer-form'>
                    <p className='footer-form__text'>Never miss an update</p>
                    <form action="#" className='footer__form'>
                        <input type="text" className='footer-form__input' placeholder='Inter email...' />
                        <button type="submit" className='footer-form__button'>
                            <i className="bi bi-chevron-down"></i>
                        </button>
                    </form>
                </div>
            </div>
            <div className="copyright">
                <div className="copyright__content container">
                    <img src={logoo} alt="" />
                    <p className='copyright-content__text'>© 2019 Fabrx </p>
                    <div className="copyright__icons">
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={insta} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                        <a href="#"><img src={be} alt="" /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer;