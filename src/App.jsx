import React from 'react'
import Hero from './sections/Hero'
import Header from './sections/Header'
import About from './sections/About'
import Services from './sections/Services'
import CtaOne from './sections/CtaOne'
import Packages from './sections/Packages'
import Featurs from './sections/Featurs'
import Footer from './sections/Footer'

const App = () => {
  return (
  <div >
       <Header/>
       <Hero/>
       <About/>
       <Services/>
       <CtaOne/>
       <Packages/>
       <Featurs/>
      <Footer/>
 </div>
  )
}

export default App
