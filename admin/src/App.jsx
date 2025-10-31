import React from 'react'
import Login from './pages/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllBookings from './pages/Admin/AllBookings';
import AddLabSci from './pages/Admin/AddLabSci';
import LabSciList from './pages/Admin/LabSciList';

const App = () => {

  const {aToken} = useContext(AdminContext);

  return aToken ? (
    <div className='bg-orange-200'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-bookings' element={<AllBookings />} />
          <Route path='/add-LabSci' element={<AddLabSci/>} />
          <Route path='/LabSci-List' element={<LabSciList />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  )
}

export default App
