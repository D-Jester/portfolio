//imcluding dependenies
import React from 'react'
//importing styles
import '../styles/Toasts.css'

function Toasts(props) {
  return (
    <div className={`Toasts ${props.type}`}>
        {props.message}
    </div>
  )
}

export default Toasts
