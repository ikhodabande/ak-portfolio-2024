import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import Works from './components/Works'
import Resume from './components/Resume'
import Projects from './components/Projects'
import About from './components/About'
import Hire from './components/Hire'
import Contact from './components/Contact'


function App() {
  
  return (
    <>
    <Navbar/>
    <Home/>
    <Services/>
    <Works/>
    <Hire/>
    <Resume/>
    <About/>
    <Projects/>
    <Contact/>
    </>
  )
}

export default App