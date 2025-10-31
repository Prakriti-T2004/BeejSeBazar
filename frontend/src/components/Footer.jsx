import React from 'react'
import logo from '../assets/logo.png'
import footerBackImg from '../assets/footerBackImg.jpg';

const Footer = () => {
    return (
        <footer className="w-full bg-white border-t">
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-8 py-12'>
                    {/* ------ left section ------ */}
                    <div>
                        <img className='mb-5 w-40' src={logo} alt="logo" />
                        <p className='text-gray-600 text-sm leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis voluptate modi illo suscipit hic ab ullam est? Et earum totam nostrum doloribus explicabo exercitationem quos recusandae aperiam ut quisquam.</p>
                    </div>

                    {/* ------ center section ------ */}
                    <div>
                        <p className='text-lg font-semibold mb-4'>COMPANY</p>
                        <ul className='space-y-2 text-gray-600 text-sm'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    {/* ------ right section ------ */}
                    <div>
                        <p className='text-lg font-semibold mb-4'>Get In Touch</p>
                        <ul className='space-y-2 text-gray-600 text-sm'>
                            <li>+1 212-456-7890</li>
                            <li>BeejSeBazarApp2025@gmail.com</li>
                        </ul>
                    </div>
                </div>
                
                {/* -------COPYRIGHT TEXT-------- */}
                <div className="border-t border-gray-200">
                    <p className='py-6 text-sm text-center text-gray-600'>Copyright 2024@ BeejSeBazar - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
