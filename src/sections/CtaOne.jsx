import React, { useEffect } from 'react'
import cta1 from "../assets/cta1.webp"
import {FaPlay} from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"

const CtaOne = () => {
useEffect(()=>{
AOS.init({
  duration:800,
  delay:200,
  once:false
}) 
},[]

)
  return (
    <div id='cta1' className='relative w-full lg:h-125 h-auto flex flex-col justify-center items-center bg-cover bg-center lg:p-22 p-10 gap-5'   style={{backgroundImage:`url(${cta1})`}}>
{/* black overlay*/ }
<div className='absolute inset-0 bg-black/50'></div>
<div className='flex flex-col justify-center items-center gap-5 relative z-10 '>
  <div className='flex flex-col lg:w-[60%] text-center w-full justify-between items-center gap-5'>
    <h1 data-aos='zoom-in' delay='100' className='text-white text-3xl flex justify-center items-center lg:text-6xl '>No matter where you’re going from, we take you there
</h1>
<p data-aos='zoom-in' delay='100' className='text-white text-lg lg:text-2xl '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus veritatis hic doloremque quibusdam reiciendis consequatur quis iusto exercitationem. Nisi, odit?</p>
<div  data-aos='zoom-in' delay='300'className='bg-white px-4 py-4 rounded-full'>
<FaPlay className='text-2xl text-orange-600'/>
</div>
  </div>
  <div></div>
</div>
    </div>
  )
}

export default CtaOne
