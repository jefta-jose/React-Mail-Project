import './sidenav.scss'
import Button from '../components/Button'
import MenuItems from '../components/MenuItems'
import DirectMessage from '../components/DirectMessage'

const SideNav = () => {
    return (
        <div className='sidenav'>
            <div className="btn-wrapper">
                <Button />
            </div>
            <MenuItems />
            <DirectMessage />
        </div>
    )
}

export default SideNav