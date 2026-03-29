import React, { useEffect } from 'react'
import  {tourpackages} from "../export"
import {MdOutlineDateRange} from "react-icons/md"
import { FaUsers } from 'react-icons/fa'
import AOS from "aos"
import "aos/dist/aos.css"

const Packages = () => {
useEffect(()=>{
  AOS.init({
    duration:800,
    delay:200,
    once:false

  })
}

)

  return (
    <div id='packages' className='w-full bg-gray-200 flex flex-col justify-between py-20 lg:py-22 px-5 lg:px-20 gap-5'>
      <div id='top' className='flex flex-col lg:flex-row justify-between items-center lg:gap-20 gap-5'>
<div>
<h1 data-aos='zoom-in'delay="100" className='text-3xl lg:text-5xl font-semibold'>Explore Our Most Popular Travel Packages</h1>
</div>
<div data-aos='zoom-in'delay="200" className='flex flex-col justify-between gap-7 items-start'>
<p className=' text-gray-500 text-left'>Dictum viverra enim quam consectetur posuere ex montes duis purus sociosqu. Blandit pulvinar mollis a aptent egestas convallis.</p>
<hr className='w-[18%] border-2 border-orange-500' />
</div>
      </div>
      <div id='bottom'className=' w-full'>

<div  className='w-full grid lg:grid-cols-3 grid-cols-1 justify-between items-start gap-6 mt-5 '>
{tourpackages.map((item,index)=>(
  <div  key={index} data-aos="zoom-in" delay="400" className='flex flex-col justify-between items-start w-full'>
    <div className='w-full h-75 bg-center bg-cover relative rounded-md ' style={ {backgroundImage:`url(${item.image})`}}> 
      <span className='absolute text-white  bg-orange-500 p-2 w-auto h-auto top-0 left-6 flex flex-col justify-center items-center rounded-md'>
        <span className='texl-xl font-medium'>{item.price}</span> <p className='text/sm font-light'>/person</p>
      </span>
    </div>
    <div id='content ' className='w-full p-7 bg-white flex flex-col  justify-between items-start gap-5'>
      <h1 className='text-xl font-semibold w-[80%]'>{ item.name}</h1>
      <hr className='w-full border-gray-200 border' />
      <div className='flex justify-center items-start gap-4'>
        <span className='flex justify-center items-center gap-1' >
          <MdOutlineDateRange  className='text-orange-500 text-xl'/>   <p className='text-gray-400'>{item.days}</p>  
        </span>
         <span className='flex justify-center items-center gap-2' >
          <FaUsers  className='text-orange-500 text-xl'/>   <p className='text-gray-400 '>{item.pax}</p>  
        </span>
      </div>
      <div className='text-gray-500'>{item.about}</div>
      <button className=' w-full p-3 bg-orange-500 text-white font-semibold  hover:bg-black cursor-pointer rounded-md mt-5'> {item.btn} </button>

    </div>
  </div>

))}
</div>


      </div>
    </div>
  )
}

export default Packages
