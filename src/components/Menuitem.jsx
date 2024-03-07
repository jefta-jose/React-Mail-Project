import './menuitem.scss'
import { NavLink } from 'react-router-dom'
const Menuitem = ({ to, img, txt, number }) => {
    return (
        <NavLink to={to} className='menuitem'>
            <div className="left">
                <img src={img} alt="nopic" />
                <p>{txt}</p>
            </div>
            {
                number && (<span className='value'>{number && number}</span>)
            }

        </NavLink>
    )
}

export default Menuitem;