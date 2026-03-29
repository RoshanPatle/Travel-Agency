import React, {useEffect} from 'react'
import {features} from "../export"
import AOS from "aos"
import 'aos/dist/aos.css'

const Featurs = () => {

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
    <div id='whyUs'className='w-full flex flex-col justify-between  gap-5  py-10  lg:py-20 px-4 lg:px-10'>
      <div  className='flex flex-col justify-between gap-3 items-center lg:items-center lg:gap-5'>
<h1 data-aos="zoom-in" data-aos-delay="100" className='font-semibold text-black text-3xl lg:text-5xl'> Why Should You Travel With Us</h1>
<p  data-aos="zoom-in" data-aos-delay="200" className='lg:w-[60%] text-center lg:text-xl text-gray-500 text-md'>Dictum viverra enim quam consectetur posuere ex montes 
  duis purus sociosqu. Blandit pulvinar mollis a aptent egestas convallis.</p>

      </div>
<div data-aos="zoom-in" data-aos-delay="300" className='flex w-full flex-col lg:flex-row justify-center items-center gap-4'> {features.map((item,index)=>(
        <div key={index} className='bg-pink-100 py-6 px-6 lg:py-8 lg:px-11  flex items-center flex-col justify-between gap-5 rounded-md'>
           <div className='bg-orange-600 p-2 rounded-md '>  <item.icon className='text-white text-4xl' /> </div> 
           <h1 className='font-bold text-xl'>{item.name}</h1>
           <p className='text-gray-600 text-center w-72 '> {item.about} </p>
           
           </div>
      ))}
    </div>
  
</div>)}
      

export default Featurs
