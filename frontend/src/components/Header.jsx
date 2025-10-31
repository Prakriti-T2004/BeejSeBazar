import React from 'react'
import Background1 from '../assets/Background1.png'
import arrow_icon from '../assets/arrow_icon.png'
import group_profiles from '../assets/group_profiles.png'
import chatbot_icon from '../assets/chatbot_icon.jpg'
import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import chatbot_gui from '../pages/chatbot_gui'

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-cover bg-center w-full rounded-lg px-6 md:px-10 lg:px-20" style={{ backgroundImage: `url(${Background1})` }}> 
      {/*----left side------*/}
      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <div className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
            <p className="text-3xl font-semibold mb-1">Your Land Is Not Just A Field</p>
            <p className="text-5xl text-white ">It's a legacy nurtured by generations.</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={group_profiles} alt=""/>
            <p className='text-lg font-'>Simply browse through our extensive list of trusted labourers and scientists, <br className='hidden sm:block'/> schedule your booking right now.</p>
        </div>
        <a href="#ServicesMenu" className='flex items-center gap-2 bg-yellow-900 px-8 py-3 rounded-full text-white text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Get Started <img className='w-3' src={arrow_icon} alt=" " />
        </a>

      </div>

      {/* ----- Right side----*/}
      <div className='md:w-1/2 relative'>
         <div onClick={() => navigate("/chatbot_gui")} className='w-20 h-20 rounded-full absolute top-10 right-10 flex items-center justify-center hover:scale-105 transition-all duration-300'>
            <img className='border rounded-full' src={chatbot_icon} alt=""/>
         </div>
      </div>
    </div>
  )
}

export default Header

