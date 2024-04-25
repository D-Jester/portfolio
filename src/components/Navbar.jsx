//importing dependencies
import React from 'react'
import { Link } from 'react-router-dom'
//importing styles
import '../styles/Navbar.css'
//importing logo
import logo from '../images/logo.png'
//importing component
import Contact from './Contact'
import Button from './Button'

function Navbar() {
  const contact = () => {
    const element1 = document.getElementById('contactBody')
    const element2 = document.getElementById('contacts')
    element1.style.transform = "scale(1)"
    element2.style.transform = "scale(1)"
    return
  }
  return (
    <>
      <header className='navbar'>
        <div className='logo'>
          <img src={logo} alt="" />
          <p>Abhirup Guha Roy</p>
        </div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/AboutMe">About Me</Link>
          <button id='navbutton' onClick={contact}>Contact Me</button>
        </nav>
      </header>
      <Contact />
    </>
  )
}

export default Navbar

