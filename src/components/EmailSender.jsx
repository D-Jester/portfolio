//importing dependencies
import React, { useState } from 'react'
// import emailjs from 'emailjs'

//importing styles
import '../styles/EmailSender.css'
import '../styles/Buttons.css'

//importing component
import Button from './Button'
import Toasts from './Toasts'

function EmailSender() {
    const [mailInfo, setMailInfo] = useState({
        receiver: "Abhirup Guha Roy",
        sender: "",
        receiverEmail: "abhirupguharoy1@gmail.com",
        senderEmail: "",
        subject: "",
        message: ""
    });
    const [message,setMessage]=useState("")
    const [type,setType]=useState("")
    const handleOnChangeRegister = (e, type) => {
        if (type === "sender") {
            setMailInfo({ ...mailInfo, ...{ sender: e.target.value } });
            return;
        }
        if (type === "senderEmail") {
            setMailInfo({ ...mailInfo, ...{ senderEmail: e.target.value } });
            return;
        }
        if (type === "subject") {
            setMailInfo({ ...mailInfo, ...{ subject: e.target.value } });
            return;
        }
        if (type === "message") {
            setMailInfo({ ...mailInfo, ...{ message: e.target.value } });
            return;
        }
    }
    const Toast = (time,message,type) =>{
        setMessage(message)
        setType(type)
        const element = document.getElementsByClassName('Toasts')[0]
        element.style.top="2rem"
        element.style.visibility="visible"
        setTimeout(()=>{
            element.style.top="-100%"
            element.style.visibility="hidden"
            setMessage("")
            setType("type")
        },time)
    }
    const handleSubmit = (e) => {
        //checking blank field
        if(mailInfo.sender === '' || mailInfo.senderEmail === "" || mailInfo.subject === "" || mailInfo.message === ""){
            Toast(2000,"Empty Fields","warning")
        }
    }
    const noCancel = (event) => {
        event.stopPropagation()
        return
    }
    return (
        <>
            <div className='emailSender' onClick={noCancel}>
                <form action="">
                    <h1>Send an Email</h1>
                    <div className='info'>
                        <div className="input-group">
                            <input id='sender' className='input' required={true} value={mailInfo.sender} name='sender' type="text" onChange={e => { return handleOnChangeRegister(e, "sender") }} />
                            <label htmlFor="sender" >Your Name:</label>
                        </div>
                        <div className="input-group">
                            <input id='senderEmail' className='input' required={true} value={mailInfo.senderEmail} name='senderEmail' type="text" onChange={e => { return handleOnChangeRegister(e, "senderEmail") }} />
                            <label htmlFor="senderEmail" >Your Email:</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <input id='subject' className='input' required={true} value={mailInfo.subject} name='subject' type="text" onChange={e => { return handleOnChangeRegister(e, "subject") }} />
                        <label htmlFor="subject" >Subject:</label>
                    </div>
                    <div className="textArea">
                        <label htmlFor="message" >Message:</label>
                        <textarea id='subject' rows={6} className='input' required={true} value={mailInfo.message} name='message' type="text" onChange={e => { return handleOnChangeRegister(e, "message") }} />
                    </div>
                    <button id='button1' className='stylish-button' onClick={handleSubmit} >Send Mail</button>
                </form>
                <Toasts message={message} type={type}/>
            </div>            
        </>
    )
}

export default EmailSender
