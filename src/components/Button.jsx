//importing dependencies
import React, { useState } from 'react'

//importing styles
import '../styles/Buttons.css'

function Button(props) {
    const response = (e) => {
        if (props.link === "none") {
            document.getElementById("button1").removeAttribute("onClick")
            return
        } else {
            window.open(`${props.link}`)
            console.log(props)
            console.log(props.name)
        }
    }
    return (
        <div>
            <button id='button1' className='stylish-button' onClick={response}>{props.name}</button>
        </div>
    )
}

export default Button
