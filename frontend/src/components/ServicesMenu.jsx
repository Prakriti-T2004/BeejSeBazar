import React from 'react'
import {services} from '../assets/assets'
import { Link } from 'react-router-dom'

const ServicesMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 text-gray-800'id='ServicesMenu'>
        <h1 className='text-3xl font-medium text-primary2'>Explore our Services</h1>
        <p className='sm:w-1/3 text-center text-sm font-semibold text-orange-900 '>From crop health detection to market insights, our services are designed to help farmers grow smarter, sell better, and thrive sustainably.</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
            {services.map((item,index)=>(
                <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/services/${item.service}`}>
                    <img className='w-16 sm:w-24 mb-2 rounded-full bg-primary1' src={item.image} alt=""/>
                    <p className='text-amber-900 text-md'>{item.service}</p>
                </Link>
            ))}
        </div>

      
    </div>
  )
}

export default ServicesMenu
