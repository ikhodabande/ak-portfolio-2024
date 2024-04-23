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
import { Helmet } from 'react-helmet'


function App() {
  
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>AmirMohammad Khodabande</title>
                <link rel="canonical" href="http://ikhodabande.ir" />
                <meta name="description" content="AmirMohammad Khodabande Portfolio - 2024" />
    </Helmet>
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