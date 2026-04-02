import React from 'react'
import {IoMail} from "react-icons/io5"
import {FaPhoneAlt} from "react-icons/fa"
import {AiFillInstagram} from "react-icons/ai"
import { FaTwitter , FaLinkedin , FaFacebook} from 'react-icons/fa'

const Footer = () => {
  return (
    <div id='contact' className=' w-full bg-black lg:px-22 px-5 py-10 flex flex-col justify-center items-center gap-6'>
      <div id='top' className='bg-[#046e8f] w-full lg:px-10 p-6 rounded-md flex lg:flex-row flex-col justify-between items-start -mt-30  gap-6'>
<div className=' w-full flex flex-col justify-between items-start gap-5'>
<h1 className='text-3xl text-white font-semibold text-left w-full'> Crafting Unforgettable Moments, One Trip at a Time</h1>
<hr className='border-2 lg:w-[10%] w-[20%] border-orange-600' />

</div>
<div className="lg:w-[30%] w-full flex flex-col justify-between items-start gap-5">
<h1 className=' text-white text-xl'>  Subscribe our Newsletter</h1>
<div className='flex lg:flex-row flex-col gap-3 w-full'> 
<input type="text" placeholder='Enter your Email' className='bg-white text-black p-3 rounded-md '/>
<button className='bg-orange-600 text-white p-3 rounded-md'>Subscribe</button>
</div>
</div>
      </div>


     
      <div id='mid'   className='text-white w-full flex lg:flex-row flex-col justify-between items-start gap-10 '>

        {/*  1st box  */}
<div className='lg:w-[40%] w-full'>
  <h1 className='text-3xl font-semibold'>GlobeSprint</h1>
  <p className='mt-5'>Potenti molestie vitae viverra sodales at. Aenean 
    faucibus gravida laoreet consequat mollis arcu diam pulvinar pellentesque.</p>
<div className='flex flex-col justify-between items-start gap-2 mt-5'>
<div className='flex justify-start items-center gap-2'>
 <IoMail className='text-orange-600 text-xl'/> <p>hello@triptrave12.com</p>
</div>
<div className='flex justify-start items-center gap-2'>
 <FaPhoneAlt className='text-orange-600 text-xl'/> <p>+91 1234 456 890</p>
</div>

</div>
</div>
 {/*  1st box  ends here*/}

 {/*  2st box  */}
<div className='lg:w-[20%] w-full'>
  <h1 className='text-xl'>Quick Links</h1>
  <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Home</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>About</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Services</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Features</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Contact</li>
  </ul>

</div>
 {/*  2st box  ends here */}

  {/*  3st box */}

<div className='lg:w-[20%] w-full'>
  <h1 className='text-xl'>Travel Services</h1>
  <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Tour Packages</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Flight & Hotel Deals</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Travel Insurance</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Visa Assistance</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer'>Online Booking</li>
  </ul>

</div>
 {/*  3st box  ends here */}

 {/*  4st box   */}
<div className='lg:w-[20%] w-full'>
  <h1 className='text-xl'>Follow Us</h1>
  <ul className='flex flex-col justify-between items-start gap-3 mt-5'>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer flex justify-between items-center gap-2'> <FaFacebook className='text-orange-600 text-xl'/>   FaceBook</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer flex justify-between items-center gap-2'> <AiFillInstagram className='text-orange-600 text-xl'/>  Instagram</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer flex justify-between items-center gap-2'> <FaLinkedin className='text-orange-600 text-xl'/>  Linkdin</li>
    <li className='text-gray-300 hover:text-orange-600 cursor-pointer flex justify-between items-center gap-2'> <FaTwitter className='text-orange-600 text-xl'/>   twitter</li>
    
  </ul>

</div>
 {/*  4st box  ends here */}
      </div>
<hr className='text-gray-800 border w-full' />

<div id='last' className='flex justify-between items-center gap-2'>
  <p className='text-gray-300 text-center'>Copyright © 2023 GlobeSprint. All rights reserved.</p>
</div>
      
    </div>
  )
}

export default Footer
