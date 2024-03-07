import './mailpreview.scss'
import print from '../assets/print.png'
import maxView from '../assets/maxView.png'
import star from '../assets/star.png'
import reply from '../assets/reply.png'
import dotsvertical from '../assets/dots-vertical.png'
// import {}

const MailPreview = () => {
    return (
        <div className='mailpreview'>
            <div className="nav">
                <p className='subject'>Subject</p>
                <div className="nav_options">
                    <img src={print} alt="print" />
                    <img src={maxView} alt="maxView" />
                </div>
            </div>
            <div className="header">
                <div className="logo">
                    <img src="https://via.placeholder.com/50" alt="nopic" />
                </div>
                <div className="info">
                    <p>From: <span>sender@gmail.com</span></p>
                    <p>To: <span>me</span></p>
                </div>
                <div className="header_options">
                    <img src={reply} alt="print" />
                    <img src={star} alt="maxView" />
                    <img src={dotsvertical} alt="maxView" />
                </div>
            </div>
            <div className="body">
                <div className="date">
                    <p className="translate">Translate message?</p>
                    <p className='time-date'><span>12/12/2023</span> <span>12:00 PM</span></p>
                </div>
                <div>
                    <p className="subject">Subject</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore, dolorum hic? Commodi quos odit mollitia, ut autem beatae, quod dolore id doloremque tenetur quisquam fuga hic qui, asperiores deleniti explicabo Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit dolore quo earum nihil temporibus error dolores accusantium vitae ducimus illo blanditiis, incidunt omnis facilis dicta reiciendis, ratione est cupiditate libero?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet exercitationem magni dolore quaerat nesciunt possimus molestias quas, ex placeat perspiciatis necessitatibus sit temporibus quod. Nostrum saepe praesentium hic esse aspernatur!.</p>
                </div>
            </div>
        </div>
    )
}

export default MailPreview