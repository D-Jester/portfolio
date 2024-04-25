//importing dependencies
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  BrowserRouter as Router
} from "react-router-dom";

//importing global style
import './styles/GlobalStyles.css'

//importing components and pages
import AnimatedRoutes from './components/AnimatedRoutes';

function App(props) {
  return (
    <div>
      <Router>
        <AnimatedRoutes />
      </Router>
    </div>
  )
}

export default App

