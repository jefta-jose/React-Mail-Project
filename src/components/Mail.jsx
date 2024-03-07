import './mail.scss'
import { formatDate } from '../utils/Utils'
import { useContext } from 'react'
import { viewCurrentEmailContext } from '../context/viewEmailContext'

const Mail = ({ email }) => {
    const { setEmailId } = useContext(viewCurrentEmailContext);

    const handleView = () => {
        setEmailId(email.id);
    }
    return (
        <div className='email' onClick={handleView}>
            <div className="logo">
                <img src={email.logo_url} alt="nopic" />
            </div>
            <div className="content">
                <div className="top">
                    <p className='subject'>{email.subject}</p>
                    <p className='date'>{formatDate(email.date)}</p>
                </div>
                <div className="bottom">
                    <p>{email.body}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail