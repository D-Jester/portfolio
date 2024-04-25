//importing dependencies
import React from 'react'
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";

//importing components and pages
import Navbar from './Navbar'
import Home from '../pages/Home'
import About from '../pages/AboutMe'
import Toasts from './Toasts';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <div>
            <AnimatePresence>
                <Navbar />
                <Routes location={location} key={location.pathname}>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/AboutMe' element={<About />}></Route>
                </Routes>
                
            </AnimatePresence>
        </div>
    )
}

export default AnimatedRoutes
