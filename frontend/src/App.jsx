import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyBooking from './pages/MyBooking'
import Booking from './pages/Booking'
import Navbar from './components/NavBar'
import Footer from './components/Footer'
import ChatBot_gui from './pages/chatbot_gui'
import Weather from './components/weather'


const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/services/:speciality' element={<Services />}/>  
        <Route path='/Labours_Scientist/:speciality' element={<Services />}/>      
        <Route path='/login' element={<Login />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/my-profile' element={<MyProfile />}/>
        <Route path='/my-bookings' element={<MyBooking/>}/>
        <Route path='/booking/:serId' element={<Booking />}/>
        <Route path='/chatbot_gui' element={<ChatBot_gui />} />
        <Route path='/Weather_Prediction' element={<Weather />} /> 

      </Routes>

      <Footer/>

    </div>
  )
}

export default App
