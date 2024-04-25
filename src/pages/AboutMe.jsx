//importing dependencies
import React from 'react'
import { motion } from 'framer-motion';
//importing styles
import '../styles/About.css'
//importing image
import portfoio from '../images/portfolioimage2.png'
//importing icons
import { FaDotCircle } from "react-icons/fa";
import { Router } from 'react-router-dom';


function AboutMe() {
    return (
        <motion.div className='aboutbody'
        initial={{
            opacity:0,
            x:100,
            transitionDuration: 1.5
        }}
        animate={{
            opacity:1,
            x:0,
            transition: 1.5
        }}
        exit={{
            opacity:0,
            x:100
        }}
        >
            <div className="part1">
                <div className='profilePhoto'>
                    <div className='profileContainer'>
                        <img src={portfoio} alt="" id='image2' />
                    </div>
                </div>
                <div className='education'>
                    <div>
                        <h2>Education</h2>
                        <p>
                            <FaDotCircle /> Studying BE Mechanical engineering at Jadavpur University. <br />
                            <b>Batch</b> - 2023 - 2027
                        </p><br />
                        <p>
                            <FaDotCircle /> Passed ISC from St.Stephens School, Dum dum <br />
                            <b>Batch</b> - 2023
                        </p>
                    </div>
                </div>
                <div className='technologySkills'>
                    <div className="development">
                        <h2>Development Skills</h2>
                        <ul>
                            <li>Full Stack Web Developer</li>
                            <li>MERN Stack(Advanced)</li>
                            <li>Database System Management</li>
                            <li>Three.js</li>
                            <li>UI/UX with Figma(intermediate)</li>
                            <li>App Development (basics)</li>
                        </ul>
                    </div>
                    <div className="ai">
                        <h2>AI/ML</h2>
                        <ul>
                            <li>DSA with c++</li>
                            <li>Python</li>
                            <li>Python Libraries</li>
                            <li>Ml Graphs and graph theory</li>
                        </ul>
                    </div>
                </div>
                <div className='coreskillsBorder'></div>
                <div className="coreSkills">
                    <h2>Core Branch Skills</h2>
                    <ul>
                        <li>Mechanincal Engineer</li>
                        <li>3D - Aircraft Modelling</li>
                        <li>Basic Mechatronics</li>
                    </ul>
                </div>
                <div className='otherskillsBorder'></div>
                <div className='otherSkills'>
                    <h2>Other Skills</h2>
                    <p>Data Visualisation with Excel, Content Creation with Canva, Photo and Video Editing</p>
                </div>
                <div className='passion'>
                    <h2>Passion</h2>
                    <ul>
                        <li>Guiter</li>
                        <li>Karate</li>
                        <li>Research</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default AboutMe
