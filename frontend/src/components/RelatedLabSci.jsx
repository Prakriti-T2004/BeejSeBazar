import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedLabSci = ({speciality,serId}) => {
    const {Labours_Scientist} = useContext(AppContext)
    const navigate = useNavigate()

    const [RelLabsci, setRelLabSci] = useState([])

    useEffect(()=>{
        if(Labours_Scientist.length > 0 && speciality){
            const LabSciData = Labours_Scientist.filter((ser)=> ser.speciality === speciality && ser._id !== serId)
            setRelLabSci(LabSciData)
        }
    },[Labours_Scientist,speciality,serId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Similar to your choice</h1>
      <p className='sm:w-1/3 text-center text-sm'>find the professional who aligns perfectly with your crop needs</p>
      <div className = 'w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {RelLabsci.slice(0,5).map((item,index)=>(
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

export default RelatedLabSci
