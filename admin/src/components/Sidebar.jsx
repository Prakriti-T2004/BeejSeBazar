import React from 'react'
import assets from '../assets/assets';
import { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

  const {aToken} = useContext(AdminContext);

  return (
    <div className='min-h-screen bg-white border-r'>
      {
        aToken && <ul className='text-[#515151] mt-5'>

          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary2' : ''}`} to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="home"/>
            <p>Dashboard</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary2' : ''}`} to={'/all-bookings'}>
            <img src={assets.appointment_icon} alt="home"/>
            <p>Appointment</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary2' : ''}`} to={'/add-LabSci'}>
            <img src={assets.add_icon} alt="home"/>
            <p>Add LabSci</p>
          </NavLink>
          <NavLink className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#F2F3FF] border-r-4 border-primary2' : ''}`} to={'/LabSci-List'}>
            <img src={assets.people_icon} alt="home"/>
            <p>Labor & Scientist List</p>
          </NavLink>
        </ul>
      }
    </div>
  )
}

export default Sidebar
