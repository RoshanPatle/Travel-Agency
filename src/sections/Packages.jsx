import React, { useEffect } from 'react'
import  {tourpackages} from "../export"
import {MdOutlineDateRange} from "react-icons/md"
import { FaUser } from 'react-icons/fa'
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
<h1 data-aos='zoom-in 'delay="100" className='text-3xl lg:text-5xl font-semibold'>Explore Our Most Popular Travel Packages</h1>
</div>
<div data-aos='zoom-in 'delay="200" className='flex flex-col justify-between gap-7 items-start'>
<p className=' text-gray-500 text-left'>Dictum viverra enim quam consectetur posuere ex montes duis purus sociosqu. Blandit pulvinar mollis a aptent egestas convallis.</p>
<hr className='w-[18%] border-2 border-orange-500' />
</div>
      </div>
      <div id='bottom'className=' '>




      </div>
    </div>
  )
}

export default Packages
