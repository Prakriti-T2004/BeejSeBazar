import React, { useContext, useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import DiseaseDetection from '../components/DiseaseDetection'
import Weather from '../components/weather'
import Market from '../components/Market'



const Services = () => {

  const { speciality } = useParams()
  const [filterSer, setFilterSer] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate()

  const { Labours_Scientist } = useContext(AppContext)

  const applyFilter = () => {
    if (speciality) {
      setFilterSer(Labours_Scientist.filter(ser => ser.speciality === speciality))
    } else {
      setFilterSer(Labours_Scientist)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [Labours_Scientist, speciality])


  return (
    <div>
      <p className='text-gray-600'>Browse through the List of agriculture specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary2 text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
        <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => speciality === 'Skilled Labours' ? navigate('/Services') : navigate('/Labours_Scientist/Skilled Labours')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Skilled Labours" ? "bg-primary1 text-black" : ""}`}>Skilled Labours</p>
          <p onClick={() => speciality === 'Crop & Soil Advisory' ? navigate('/Services') : navigate('/Labours_Scientist/Crop & Soil Advisory')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Crop & Soil Advisory" ? "bg-primary1 text-black" : ""}`}>Crop & Soil Advisory</p>
          <p onClick={() => speciality === 'Disease Detection' ? navigate('/DiseaseDetection') : navigate('/Services/Disease Detection')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Disease Detection" ? "bg-primary1 text-black" : ""}`}>Disease Detection</p>
          <p onClick={() => speciality === 'Weather Prediction' ? navigate('/Weather Prediction') : navigate('/Services/Weather Prediction')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Weather Prediction" ? "bg-primary1 text-black" : ""}`}>Weather Prediction</p>
          <p onClick={() => speciality === 'Market Analysis' ? navigate('/Market Analysis') : navigate('/Services/Market Analysis')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Market Analysis" ? "bg-primary1 text-black" : ""}`}>Market Analysis</p>
        </div>
        {speciality === 'Disease Detection' && (
          <DiseaseDetection />
        )}

        {speciality === 'Market Analysis' && (
          <Market />
        )}

        {speciality === 'Weather Prediction' && (
          <Weather Prediction />
        )}


        <div className='w-full grid grid-cols-auto gap-4 gap-y-6'>
          {
            filterSer.map((item, index) => (
              <div onClick={() => navigate(`/booking/${item._id}`)} className='border border-primary2 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img src={item.image} alt="" className="w-full h-[300px] object-cover rounded-md" />
                <div className='p-4'>
                  <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                    <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                    <p>Available</p>
                  </div>
                  <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                  <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Services
