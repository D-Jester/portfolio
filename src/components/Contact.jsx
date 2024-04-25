//importing dependencies
import React from 'react'

//importing styles
import '../styles/Contact.css'

//importing react icons
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

//importing images
import contact from '../images/contacus.png'

//importing Component
import Button from './Button'
import EmailSender from './EmailSender';

function Contact() {
    const cancel = () => {
        const element = document.getElementById('contactBody')
        element.style.transform = "scale(0)"
        return
    }
    const noCancel = (event) => {
        event.stopPropagation()
        return
    }
    return (
        <div id='contactBody' onClick={cancel}>
            <div id='border'></div>
            <div id='contacts' onClick={noCancel}>
                <div className='contactDetailsContainer'>
                    <div className='contactDetails'>
                        <h2>Contacts Details</h2>
                        <p><FaPhoneAlt /> : +91 8910232532</p>
                        <a href="#"><IoMdMail /> : abhirupguharoy1@gmail.com</a>
                        <a href="#"></a>
                    </div>
                    <div className='contactDetails2'>
                        <Button link={"https://www.linkedin.com/in/abhirupguharoy/"} name={"My Linkdin Account"} />
                        <Button link={"https://www.linkedin.com/in/abhirupguharoy/"} name={"My Github Account"} />
                        <Button link={"https://www.instagram.com/rudr_abhi_raj?igsh=Y2xyd2ZkOWcwcGNu"} name={"My Insta Account"} />
                    </div>
                </div>
                <img src={contact} id='contactImage' alt="" />
                <div className='email'>
                    <EmailSender />
                </div>
            </div>

        </div>
    )
}

export default Contact
