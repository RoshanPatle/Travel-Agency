import React, { useEffect } from 'react'
import aboutimg1 from '../assets/about1.webp'
import aboutimg2 from '../assets/about2.webp'
import {FaGlobeAmericas }from 'react-icons/fa'
import {IoIosPricetag}from 'react-icons/io'
 import AOS from 'aos'
 import 'aos/dist/aos.css'
const About = () => {
  useEffect( ()=>{
  AOS.init({
    duration:800,
    delay:200,
    once:false,
  })
  
  },[])
  return (
    
      
<div id='about' className=' flex lg:flex-row flex-col  justify-between lg:p-22 items-center gap-15 py-20 px-5 '>
  <div className='  flex flex-col  justify-between items-start '>
    <img data-aos='zoom-in' data-aos-delay='100' src={aboutimg1} alt=""  className=' rounded-md' />
    <img data-aos='zoom-in' data-aos-delay='200'  src={aboutimg2} alt=""  className=' rounded-md border-10  w-[40%] border-white -mt-37.5 -ml-7.5 -rotate-2'/>
  </div>
<div className='flex flex-col gap-5'>
  <div className='flex flex-col gap-5  '>
    <h1 data-aos='zoom-in' data-aos-delay='300' className=' text-gray-500 text-md ' >
     
      About US
    </h1>
     <h1 data-aos='zoom-in' data-aos-delay='400' className='text-3xl lg:text-5xl text-black  font-Fakhwang font-semibold'>Embark on a hilarious journey with our travel experts</h1>
     <p data-aos='zoom-in' data-aos-delay='500' className='font-semibold text-gray-700' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, dignissimos!</p>
  <p data-aos='zoom-in' data-aos-delay='500' className='text-gray-500'  >Dolor tortor maximus rhoncus curae donec volutpat felis dapibus. Nisl dictumst parturient lorem eget ridiculus magna conubia lectus pede.</p>
  <hr className='w-full border-t border-gray-300' />
  </div>

<div data-aos='zoom-in' data-aos-delay='600' id='iconBox' className='grid lg:grid-cols-2 grid-cols-1 lg:items-center items-center justify-between  w-full lg:gap-5 gap-10' >
<div id='left' className='flex flex-col lg:flex-row justify-between lg:items-center items-start gap-4'>
<div id='icon'  className='bg-orange-600 w-[20%] p-4 rounded-md items-center justify-center flex cursor-pointer hover:bg-black'>
  <FaGlobeAmericas  className='text-white text-2xl'/>

</div>
<div className='w-[80%]  flex flex-col justify-center items-start gap-1' >

<h1 className='font-semibold text-xl'>Best Destination</h1>
<p className='text-gray-600 text-sm'> Efficitur condimentum massa libe.</p>
</div>

</div>

<div id='left' className='flex flex-col lg:flex-row justify-between lg:items-center items-start gap-4'>
<div id='icon'  className='bg-orange-600 w-[20%] p-4 rounded-md items-center justify-center flex cursor-pointer hover:bg-black'>
  <IoIosPricetag  className='text-white text-2xl'/>

</div>
<div> 
<h1 className='font-semibold text-xl'>Affordable Price</h1>
<p className='text-gray-600  text-sm'> Efficitur condimentum massa libe.</p>
</div>

</div>


</div>


</div>


    </div>
    
  )
}

export default About
