import React from 'react'
import banner_pic from '../assets/banner_pic.png'
import { Navigate, useNavigate } from 'react-router-dom'

const Banner = () => {
    
    const navigate = useNavigate()

    return (
        <div className='flex bg-primary1 rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
            {/*----- left side -----*/}
            <div className='flex-1 py-88 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p className="text-2xl font-semibold text-primary2 leading-snug">
                        "More than 70% of farmers"
                    </p>
                    <p className="text-2xl font-semibold text-primary2 leading-snug">
                        are using smart tech to maximize their yields and income
                    </p>
                    <p className="mt-2 text-3xl text-gray-600 italic">
                        The future of farming is here...
                    </p>

                </div>
                <button onClick={()=>{navigate('/login'); scrollTo(0,0)}} className='bg-primary2 text-sm sm:text-base text-white font-bold px-8 py-3 rounded-full mt-6 hover:scale-110 transition-all'>Create account</button>
            </div>

            {/*----- right side -----*/}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative '>
                <img className='absolute inset-0 w-full h-full object-cover bottom-0 right-0 max-w-md' src={banner_pic} alt="" />
            </div>
        </div>
    )
}

export default Banner
