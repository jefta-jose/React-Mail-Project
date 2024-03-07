import './inbox.scss'
import MailList from '../components/MailList'
import MailPreview from '../components/MailPreview'
import { ViewCurrentEmailProvider } from '../context/viewEmailContext'
const Inbox = () => {
    return (
        <ViewCurrentEmailProvider>
            <div className='inbox'>
                <MailList className="mailList" />
                <MailPreview className="mailpreview" />
            </div>
        </ViewCurrentEmailProvider>
    )
}

export default Inbox