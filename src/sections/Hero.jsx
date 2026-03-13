import React, { useEffect } from 'react'
import heroimg from '../assets/hero.webp'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {

useEffect( ()=>{
AOS.init({
  duration:800,
  delay:200,
  once:false,
})

},[])

  return (
    <div id='hero' className='relative lg:h-screen h-auto  w-full py-30 bg-cover  bg-center z-20'  style={{backgroundImage:`url(${heroimg})`}} >
      {/*  black overlay*/ } 
      <div className='absolute inset-0 bg-black/40'>  </div>
      <div className='w-full relative flex items-center justify-center flex-col px-5 text-white h-full gap-6 z-10'>  
      <h1   data-aos='zoom-in' data-aos-delay='100' className=' text-center lg:text-7xl text-4xl  font-bold  font-Fahkwang'> Explore every beautiful <br />
destinations</h1>
<p  data-aos='zoom-in' data-aos-delay='200' className='lg:w-[50%] text-lg text-center w-full'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum repellendus, aliquam voluptatum quasi ea mollitia, cons
</p>
<button  data-aos='slide-up' data-aos-delay='300' className='bg-orange-500 py-3 px-7 font-semibold rounded hover:bg-black cursor-pointer capitalize mt-5'> Book Now </button>

</div>
    </div>
  )
}

export default Hero
