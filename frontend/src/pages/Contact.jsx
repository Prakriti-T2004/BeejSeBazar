import React from 'react'
import contact_image from '../assets/contact_image.jpg'

const Contact = () => {
  return (
    <div>
      <div className = 'text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT  <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={contact_image} alt=""/>
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>Our Office</p>
          <p className='text-gray-500'>Gautam Budha Nagar <br />Greater Noida, Uttar Pradesh</p>
          <p className='text-gray-500'>Tel: +91 7770888099 <br /> Email: BeejSeBazarApp2025@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Careers at BEEJSEBAZAR</p>
          <p className='text-gray-500'>Learn more about our teams and job opening</p>
          <button className='border border_black px-8 py-4 text-lg hover:bg-primary2 hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
