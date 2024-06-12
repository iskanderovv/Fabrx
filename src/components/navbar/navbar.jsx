import './navbar.css';
import logo from '../../images/logo.svg';
import profile from '../../images/profile.png';
import gift from '../../images/gift.svg';
import notification from '../../images/notification.svg';

const Navbar = () => {
    return(
        <nav className='nav container'>
            <a href="#" className='nav__logo'>
                <img src={logo} alt="logo" />
            </a>
            <div className="nav__profile">
                <img className='nav-profile__img' src={profile} alt="profile-picture" />
                <p className='nav-profile__name'>Bruce Lee</p>
                <i class="bi bi-chevron-down"></i>
            </div>
            <div className="nav__icons">
                <a href="#">
                    <img src={gift} alt="gift" />
                </a>
                <a href="#">
                    <img src={notification} alt="notification" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;