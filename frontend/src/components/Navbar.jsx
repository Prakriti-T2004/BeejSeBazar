import logo from '../assets/logo.png'
import cross_icon from '../assets/cross_icon.png'
import dropdown_icon from '../assets/dropdown_icon.png'
import profile_pic from '../assets/profile_pic.png'
import menu_icon from '../assets/menu_icon.png'
import { NavLink, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false)
  const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between bg-primary2 text-sm text-white py-4 mb-5 border-b-4 border-b-primary1'>
      <div className="flex-shrink-0">
        <img onClick={() => navigate('/')} className="h-16 w-auto mr-auto ml-4 cursor-pointer rounded-lg" src={logo} alt="" />
      </div>

      <div className='flex-1 flex justify-center'>
        <ul className='hidden md:flex items-start gap-5 font-medium pl-12'>
          <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-primary1 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/services'>
            <li className='py-1'>SERVICES</li>
            <hr className='border-none outline-none h-0.5 bg-primary1 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-primary1 w-3/5 m-auto hidden' />
          </NavLink>
          <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-primary1 w-3/5 m-auto hidden' />
          </NavLink>
        </ul>
      </div>
      <div className='flex items-center gap-4'>
        {
          token
            ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-10 h-10 rounded-full' src={profile_pic} alt="" />
              <div className='w-5 h-5 m-2 border rounded-sm bg-primary1 flex items-center justify-center'><img className='w-4' src={dropdown_icon} alt="" /></div>
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-primary1 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-black font-bold cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-bookings')} className='hover:text-black font-bold cursor-pointer'>My Booking</p>
                  <p onClick={() => setToken(false)} className='hover:text-black font-bold cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='bg-primary1 text-white px-5 py-1 rounded-md font-bold mr-2 ml-4 hidden md:block '>Create Account</button>
        }
        <div className='w-6 md:hidden bg-primary1 rounded-md mr-2'><img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={menu_icon} alt=""/></div>
        {/*--------Mobile menu----------*/}
        <div className={`${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={logo} alt=""/>
            <div className='w-7 md:hidden bg-primary1 rounded-md mr-2'>
              <img className='w-full' onClick={()=>setShowMenu(false)} src={cross_icon} alt=""/>
            </div>  
          </div>
          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium bg-primary2'>
            <NavLink onClick={()=>setShowMenu(false)} to='/'> <p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/services'> <p className='px-4 py-2 rounded inline-block'>All Services</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/about'> <p className='px-4 py-2 rounded inline-block'>About</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact'> <p className='px-4 py-2 rounded inline-block'>Contact</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar
