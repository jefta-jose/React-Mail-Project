import './maillist.scss'
import { useState } from 'react'
import { allEmails } from '../data/Mails.js'
import refresh from '../assets/refresh.png'
import dotsvertical from '../assets/dots-vertical.png'
import Mail from './Mail'


const MailList = () => {
    const [readMails, setReadMails] = useState(true);
    return (
        <div className='mailList'>
            <div className='mailTab'>
                <div className="buttons">
                    <button onClick={() => setReadMails(true)}>All</button>
                    <button onClick={(prev) => setReadMails(!prev)}>Unread</button>
                </div>
                <div className="options">
                    <button>
                        <img src={refresh} alt="refresh" />
                    </button>
                    <button>
                        <img src={dotsvertical} alt="dotsvertical" />
                    </button>
                </div>
            </div>
            <div className="mailListBody">
                {
                    readMails ? (
                        allEmails.map((mail, index) => {
                            return (
                                <Mail key={index} email={mail} />

                            )
                        })
                    ) : (
                        allEmails.filter((mail) => mail.read === false).map((mail, index) => {
                            return (
                                <Mail key={index} email={mail} />
                            )
                        })
                    )

                }
            </div>
        </div>
    )
}

export default MailList