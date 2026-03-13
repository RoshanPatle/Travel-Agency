import React, { useEffect } from 'react'
import services1 from "../assets/service1.webp"
import services2 from "../assets/service2.webp"
import services3 from "../assets/service3.webp"
import services4 from "../assets/service4.webp"
import services5 from "../assets/service5.webp"
import services6 from "../assets/service6.webp"
import AOS from "aos"
import 'aos/dist/aos.css'





const Services = () => {

  useEffect(
    ()=>{
      AOS.init({
        duration:800,
        delay:200,
        once:false
      })
    },[]
  )

  return (
    <div>
      
    </div>
  )
}

export default Services
