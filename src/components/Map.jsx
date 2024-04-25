//importing dependencies
import React from 'react'

//importing style components
import '../styles/Map.css'

function Map() {
    const mapCancel=()=>{
        const element = document.getElementsByClassName('mapContainer')[0]
        element.style.transform="scale(0)"
        return 
    }
    const noMapCancel=(event)=>{
        event.stopPropagation()
        return
    }
    return (
        <div className='mapContainer'onClick={mapCancel}>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d230.11428092138212!2d88.44044870010552!3d22.660182220339298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89f0b4f0b27cf%3A0x7b5aad818fafa67d!2sBirati%20More%20Bus%20Stand%20(Towards%20Barasat)!5e0!3m2!1sen!2sin!4v1712936160560!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" onClick={noMapCancel}></iframe> */}
        </div>
    )
}

export default Map
