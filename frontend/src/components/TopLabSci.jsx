import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopLabSci = () => {

  const navigate = useNavigate()
  const {Labours_Scientist} = useContext(AppContext)

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <div className='flex flex-col justify-center items-center bg-primary2 w-full border rounded-2xl'>
        <h1 className='text-3xl font-medium text-center text-white m-2'>Top Labours & Scientist</h1>
        <p className='sm:w-1/3 text-sm text-center text-white'>find the professional who aligns perfectly with your crop needs</p>
      </div>
      <div className = 'w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {Labours_Scientist.slice(0,10).map((item,index)=>(
          <div onClick={()=>{navigate(`/booking/${item._id}`); scrollTo(0,0)}} className='border border-primary2 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
            <img src={item.image} alt="" className="w-[200px] h-[300px] object-cover rounded-md"/>
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'
                ></p><p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/services'); scrollTo(0, 0)}} className='bg-primary2 text-white font-bold px-12 py-3 rounded-full mt-10'>more</button>
    </div>
  )
}

export default TopLabSci

/*import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopLabSci = () => {
  const navigate = useNavigate();
  const { Labours_Scientist } = useContext(AppContext);

  const handleSubmit = async (item) => {
    const payload = {
      ...item,
      image: item.image // resolves to image URL if using Webpack/Vite
    };

    try {
      const res = await fetch("http://localhost:4000/api/admin/add-labSci", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      console.log("Server response:", result);
      alert(`Successfully sent ${item.name} to backend`);
    } catch (err) {
      console.error("Error sending data:", err);
      alert("Failed to send data. Check console for details.");
    }
  };

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <div className='flex flex-col justify-center items-center bg-primary2 w-full border rounded-2xl'>
        <h1 className='text-3xl font-medium text-center text-white m-2'>Top Labours & Scientist</h1>
        <p className='sm:w-1/3 text-sm text-center text-white'>
          Find the professional who aligns perfectly with your crop needs
        </p>
      </div>

      <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {Labours_Scientist.slice(0, 10).map((item, index) => (
          <div
            className='border border-primary2 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
            key={index}
          >
            <img src={item.image} alt={item.name} className="w-[200px] h-[300px] object-cover rounded-md" />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                <p>Available</p>
              </div>
              <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
              <p className='text-gray-600 text-sm'>{item.speciality}</p>
              <div className='flex justify-between mt-4'>
                <button
                  onClick={() => {
                    navigate(`/booking/${item._id}`);
                    scrollTo(0, 0);
                  }}
                  className='bg-primary2 text-white px-4 py-2 rounded-md text-sm'
                >
                  Book Now
                </button>
                <button
                  onClick={() => handleSubmit(item)}
                  className='bg-green-600 text-white px-4 py-2 rounded-md text-sm'
                >
                  Send to Backend
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => {
          navigate('/services');
          scrollTo(0, 0);
        }}
        className='bg-primary2 text-white font-bold px-12 py-3 rounded-full mt-10'
      >
        More
      </button>
    </div>
  );
};

export default TopLabSci;*/