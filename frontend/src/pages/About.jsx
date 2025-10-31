import React from 'react'
import about_image from '../assets/about_image.webp'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>At BeejSeBazar, we believe that farming should be empowered by simplicity, connectivity, and trust.
            Our platform bridges the gap between farmers, buyers, and agri-experts—making crop marketing, service access, and resource discovery as intuitive as a few taps. Whether you're selling your harvest, seeking expert advice, or exploring government schemes, BeejSeBazar ensures that agriculture feels less like a struggle and more like a system that works for you.</p>
          <p>BeejSeBazar isn't just a digital tool — it's a commitment to transparency, dignity, and rural innovation. Our interface is designed with both seasoned farmers and first-time users in mind, offering local language support, secure data handling, and real-time market insights. We put control back into the hands of cultivators — because your produce, your time, and your livelihood deserve respect and reliability.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>We aim to make agriculture smart, inclusive, and human-centered.
            By streamlining crop listing, service booking, and knowledge sharing, BeejSeBazar empowers farmers to take charge of their future through fast, secure, and thoughtful technology.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex felx-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary2 hover:text-white font-bold transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY:</b>
          <p>BeejSeBazar is built for speed and simplicity, helping farmers access services, sell produce, and find resources without wasting time.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary2 hover:text-white font-bold transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE:</b>
          <p>BeejSeBazar makes it easy to find reliable support and market access—right from your farm, right when you need it.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary2 hover:text-white font-bold transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION:</b>
          <p>BeejSeBazar learns what matters to you—offering timely crop tips, service alerts, and market updates that match your location, season, and goals.</p>
        </div>
      </div>
    </div>
  )
}

export default About
