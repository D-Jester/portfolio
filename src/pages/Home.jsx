//importing dependencies
import React from 'react'
import {motion} from 'framer-motion'

//importing styles
import '../styles/Home.css'

//importing image
import PI from '../images/portfolioImage.png'
import wallpaper from '../images/wallpaper.png'
import { Router } from 'react-router-dom'


function Home() {
    return (
        <motion.div className='body'
        initial={{
            opacity:0,
            x:-100
        }}
        animate={{
            opacity:1,
            x:0
        }}
        exit={{
            opacity:0,
            x:-100
        }}
        >
            <img src={wallpaper} alt="" id='back' />
            <div className='portfolioImage'>
                <img src={PI} alt="" />
            </div>
            <div className='intro'>
                <div className='mainIntro'>
                    <h3>Hello There! I am</h3><br />
                    <h1 data-text="Abhirup Guha Roy">Abhirup Guha Roy</h1>
                </div>
                <div className='description'>
                    <p>
                        Doing my undergraduate degree in <b><span id='university'>Jadavpur university</span></b> in Mechanical Engineering,<br />
                        with enthusiasm in both core and IT field. <br /><br />

                        <i><blockquote>“Success stops the moment we stop learning.”</blockquote></i><br />
                        Hence always inquisitive to discover and learn new things. <br /><br />

                        Want to know more about my skills, passions, projects, etc? Visits my <b><span id='about'>About Me</span></b> page. <br />

                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
