import search from '../assets/search.png';
import notification from '../assets/notification.png';
import avatar from '../assets/avatar.png';
import chevrondown from '../assets/chevron-down.png';
import Button from '../components/Button';
import NavIcon from '../components/NavIcon';
import logo from '../assets/logo.png';
import './navbar.scss';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="nopic" />
                <h2>MailBox</h2>
            </div>
            <div className="nav-body">
                <h2>Inbox</h2>
                <div className='nav-body_right'>
                    <Button />
                    <NavIcon url={search} />
                    <NavIcon url={notification} />
                    <div className='userAvator'>
                        <NavIcon url={avatar} />
                        <img className='userAvatorImg' src={chevrondown} alt="nopic" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default NavBar