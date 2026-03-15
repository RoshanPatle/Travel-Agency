import React, { useEffect } from 'react'
import services1 from "../assets/service1.webp"
import services2 from "../assets/service2.webp"
import services3 from "../assets/service3.webp"
import services4 from "../assets/service4.webp"
import services5 from "../assets/service5.webp"
import services6 from "../assets/service6.webp"
import {FaPlay}from 'react-icons/fa'
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
    <div  className=' w-full bg-gray-200  gap-5 py-20 px-5 flex flex-col justify-between items-center lg:py-24'>
      <div  className='flex flex-col justify-between gap-3 items-start lg:items-center lg:gap-5'>
<h1 data-aos='zoom-in' delay='100' className='font-semibold text-black text-3xl lg:text-5xl'> Discover Your Next Dream Destination </h1>
<p  data-aos='zoom-in' delay='200' className='lg:w-[60%] lg:text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus illum iure doloribus. Id, aspernatur? Nulla aliquam veniam in ea cumque.</p>
<hr data-aos='zoom-in' delay='300' className='border-orange-500 border-2 w-[20%] lg:w-[7%]' />
      </div>

      <div data-aos='zoom-in' delay='400' id='first-row' className='flex lg:flex-row flex-col justify-between items-center gap-5 mt-5 w-full'>
        <div   id='left '  className='flex lg:flex-row flex-col w-full lg:w-[50%] justify-between items-center gap-5' >
<div   className=' relative w-full h-87.5 bg-cover bg-center rounded-md  z-20  justify-center items-end p-8 flex ' style={{ backgroundImage:`url(${services1})`} }> 
  <div className='inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10 absolute rounded-md'> </div>

  <div  className=' relative flex flex-col lg:flex-row justify-between gap-5 z-10 w-full items-start'> 
    <div className='   lg:w-[80%] w-full '>
<h1 className='text-white font-semibold text-2xl'>Padar Island</h1>
<p className='text-white text-lg'> Indonesia</p>
    </div>
    <div className='bg-white items-center py-3 w-[20%] lg:w-[15%] rounded-full flex justify-center' >
<FaPlay className='text-lg '/>
    </div>
  </div>
</div>

<div className=' relative w-full h-87.5 bg-cover bg-center rounded-md  z-20  justify-center items-end p-8 flex ' style={{ backgroundImage:`url(${services2})`} }> 
  <div className='inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10 absolute rounded-md'> </div>

  <div  className=' relative flex flex-col lg:flex-row justify-between gap-5 z-10 w-full items-start'> 
    <div className='   lg:w-[80%] w-full '>
<h1 className='text-white font-semibold text-2xl'>Padar Island</h1>
<p className='text-white text-lg'> Indonesia</p>
    </div>
    <div className='bg-white items-center py-3 w-[20%] lg:w-[15%] rounded-full flex justify-center' >
<FaPlay className='text-lg '/>
    </div>
  </div>
</div>




        </div>

<div  id=' right ' className=' lg:w-[50%] w-full'>
  <div className=' relative w-full h-[350px] bg-cover bg-center rounded-md  z-20  justify-center items-end p-8 flex ' style={{ backgroundImage:`url(${services1})`} }> 
  <div className='inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10 absolute rounded-md'> </div>

  <div  className=' relative flex flex-col lg:flex-row justify-between gap-5 z-10 w-full items-start'> 
    <div className='   lg:w-[80%] w-full '>
<h1 className='text-white font-semibold text-2xl'>Padar Island</h1>
<p className='text-white text-lg'> Indonesia</p>
    </div>
    <div className='bg-white items-center py-3 w-[20%] lg:w-[7%] rounded-full flex justify-center' >
<FaPlay className='text-lg '/>
    </div>
  </div>
</div>
</div>


</div>


      {/*  ------------- first row ends here-------------------------------------------------------------------------------------------------------- */}



 <div   data-aos='zoom-in' delay='500' id='first-row' className='flex lg:flex-row-reverse flex-col justify-between items-center gap-5 mt-5 w-full'>
        <div id='left '  className='flex lg:flex-row flex-col w-full lg:w-[50%] justify-between items-center gap-5' >
<div className=' relative w-full h-87.5 bg-cover bg-center rounded-md  z-20  justify-center items-end p-8 flex ' style={{ backgroundImage:`url(${services4})`} }> 
  <div className='inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10 absolute rounded-md'> </div>

  <div  className=' relative flex flex-col lg:flex-row justify-between gap-5 z-10 w-full items-start'> 
    <div className='   lg:w-[80%] w-full '>
<h1 className='text-white font-semibold text-2xl'>Padar Island</h1>
<p className='text-white text-lg'> Indonesia</p>
    </div>
    <div className='bg-white items-center py-3 w-[20%] lg:w-[15%] rounded-full flex justify-center' >
<FaPlay className='text-lg '/>
    </div>
  </div>
</div>

<div className=' relative w-full h-87.5 bg-cover bg-center rounded-md  z-20  justify-center items-end p-8 flex ' style={{ backgroundImage:`url(${services5})`} }> 
  <div className='inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10 absolute rounded-md'> </div>

  <div  className=' relative flex flex-col lg:flex-row justify-between gap-5 z-10 w-full items-start'> 
    <div className='   lg:w-[80%] w-full '>
<h1 className='text-white font-semibold text-2xl'>Padar Island</h1>
<p className='text-white text-lg'> Indonesia</p>
    </div>
    <div className='bg-white items-center py-3 w-[20%] lg:w-[15%] rounded-full flex justify-center' >
<FaPlay className='text-lg '/>
    </div>
  </div>
</div>




        </div>

<div id=' right ' className=' lg:w-[50%] w-full'>
  <div className=' relative w-full h-[350px] bg-cover bg-center rounded-md  z-20  justify-center items-end p-8 flex ' style={{ backgroundImage:`url(${services6})`} }> 
  <div className='inset-0 bg-linear-to-t from-black/60 via-black/40 to-white/10 absolute rounded-md'> </div>

  <div  className=' relative flex flex-col lg:flex-row justify-between gap-5 z-10 w-full items-start'> 
    <div className='   lg:w-[80%] w-full '>
<h1 className='text-white font-semibold text-2xl'>Padar Island</h1>
<p className='text-white text-lg'> Indonesia</p>
    </div>
    <div className='bg-white items-center py-3 w-[20%] lg:w-[7%] rounded-full flex justify-center' >
<FaPlay className='text-lg '/>
    </div>
  </div>
</div>
</div>


</div>

    </div>
  )}

export default Services
