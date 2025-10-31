import React from 'react'
import { assets } from '../../assets/assets';

const AddLabSci = () => {

  const [labSciImg, setlabSciImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEamil] = useState('');
  const [password, setPassword] = useState('');
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('Skilled Labours');
  const [certified, setCertified] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  return (
    <form className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Labour & Scientist</p>

      <div className='bg-primary2 px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-500'>
          <label htmlFor="labSci-img">
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={labSciImg ? URL.createObjectURL() : assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=> setlabSciImg(e.target.files[0]) } type="file" id="labSci-img" hidden />
          <p className='text-white font-bold'>Upload Labor & Scientist <br /> picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10'>
          <div className='w-full lg:flex-1 flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-white'>Labor & Scientist name</p>
              <input className='border-rounded px-3 py-2' type="text" placeholder='Name' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-white'>Labor & Scientist Email</p>
              <input className='border-rounded px-3 py-2' type="email" placeholder='Email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-white'>Labor & Scientist Password</p>
              <input className='border-rounded px-3 py-2' type="password" placeholder='Password' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-white'>Experience</p>
              <select className='border-rounded px-3 py-2' name="" id="">
                <option value="1 Year">1 Year</option>
                <option value="2 Year">2 Year</option>
                <option value="3 Year">3 Year</option>
                <option value="4 Year">4 Year</option>
                <option value="5 Year">5 Year</option>
                <option value="6 Year">6 Year</option>
                <option value="7 Year">7 Year</option>
                <option value="8 Year">8 Year</option>
                <option value="9 Year">9 Year</option>
                <option value="10 Year">10 Year</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-white'>Fees</p>
              <input className='border-rounded px-3 py-2' type="number" placeholder='fees' required />
            </div>

          </div>

          <div className='w-full lg:flex-1 flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-white'>Speciality</p>
              <select className='border-rounded px-3 py-2' name="" id="">
                <option value="Skilled Labours">Skilled Labours</option>
                <option value="Crop & Soil Advisory">Crop & Soil Advisory</option>
                <option value="Disease Detection">Disease Detection</option>
                <option value="Weather Prediction">Weather Prediction</option>
                <option value="Market Analysis">Market Analysis</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p className='text-white'>Address</p>
              <input className='border-rounded px-3 py-2' type="text" placeholder='address 1' required />
              <input className='border-rounded px-3 py-2' type="text" placeholder='address 2' required />
            </div>

          </div>
        </div>

        <div className='flex-1 flex flex-col gap-1'>
          <p className='mt-4 mb-2 text-white'>About Labor & Scientist</p>
          <textarea className='w-full px-4 pt-2 border rounded' placeholder='Write about Labor & Scientist' rows={5}></textarea>
        </div>
        <button className='bg-white px-10 py-3 mt-4 text-black rounded-full'>Add Labor & Scientist</button>

      </div>
    </form>
  )
}

export default AddLabSci
