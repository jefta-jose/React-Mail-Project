import './menuitems.scss'
import Trash from '../assets/trash.png'
import Inbox from '../assets/inbox.png'
import Mail from '../assets/send.png'
import Favorites from '../assets/trash.png'
import Drafts from '../assets/draft.png'
import Spam from '../assets/spam.png'
import Menuitem from './Menuitem'
import { NavLink } from 'react-router-dom'

const MenuItems = () => {
    return (
        <div className='menuitems'>
            <Menuitem to='/' img={Inbox} txt='Inbox' number={150} />
            <Menuitem to='/sent-mail' img={Mail} txt='SentMail' number={200} />
            <Menuitem to='/favorites' img={Favorites} txt='Favorites' number={200} />
            <Menuitem to='/drafts' img={Drafts} txt='Drafts' />
            <Menuitem to='/spam' img={Spam} txt='Spam' />
            <Menuitem to='/trash' img={Trash} txt='Trash' />
        </div >
    )
}

export default MenuItems