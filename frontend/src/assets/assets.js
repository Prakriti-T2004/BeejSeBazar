//icons for services
import Labour_icon from '../assets/Labour_icon.png'
import Crop_icon from '../assets/Crop_icon.png'
import weather_icon from '../assets/weather_icon.png'
import market_icon from '../assets/market_icon.png'
import disease_icon from '../assets/disease_icon.png'

export const services = [
    {
        service: 'Skilled Labours',
        image: Labour_icon
    },
    {
        service: 'Crop & Soil Advisory',
        image: Crop_icon
    },
    {
        service: 'Disease Detection',
        image: disease_icon
    },
    {
        service: 'Weather Prediction',
        image: weather_icon
    },
    {
        service: 'Market Analysis',
        image: market_icon
    }
]

//Image for doctors and scientist
import Lab1 from '../assets/Lab1.jpg'
import Lab2 from '../assets/Lab2.png'
import Lab3 from '../assets/Lab3.jpg'
import Lab4 from '../assets/Lab4.jpg'
import Lab5 from '../assets/Lab5.png'
import Lab6 from '../assets/Lab6.png'
import Lab7 from '../assets/Lab7.jpg'
import Lab8 from '../assets/Lab8.png'
import Lab9 from '../assets/Lab9.jpg'
import Lab10 from '../assets/Lab10.png'

import Sci1 from '../assets/Sci1.jpg'
import Sci2 from '../assets/Sci2.jpg'
import Sci3 from '../assets/Sci3.jpg'
import Sci4 from '../assets/Sci4.jpg'
import Sci5 from '../assets/Sci5.jpg'
import Sci6 from '../assets/Sci6.jpg'
import Sci7 from '../assets/Sci7.jpg'
import Sci8 from '../assets/Sci8.jpg'
import Sci9 from '../assets/Sci9.jpg'
import Sci10 from '../assets/Sci10.jpg'


export const Labours_Scientist = [
    {
    _id: 'Lab1',
    name: 'Mukesh Shaho',
    image: Lab1,
    speciality: 'Skilled Labours',
    Certified: 'yes',
    experience: '4 Years',
    about: 'Mukesh is a seasoned cultivator specializing in rice and wheat. Known for his precision in sowing and irrigation techniques, he brings both traditional wisdom and modern methods to the field.',
    fees: 500,
    address: {
      line1: 'Ringroad, Rampur',
      line2: 'District Sitapur, UP'
    }
  },
  {
    _id: 'Lab2',
    name: 'Sarla Devi',
    image: Lab2,
    speciality: 'Skilled Labours',
    Certified: 'true',
    experience: '6 Years',
    about: 'Sarla is an expert in organic farming, with a focus on seasonal vegetables. She’s passionate about soil health and sustainable practices, and trains others in composting and pest control.',
    fees: 600,
    address: {
      line1: 'Near Shiv Mandir',
      line2: 'Barabanki, UP'
    }
  },
  {
    _id: 'Sci1',
    name: 'Dr. Anjali Mehta',
    image: Sci1,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '12 Years',
    about: 'Dr. Mehta pioneers genetic improvements in staple crops. Her work on drought-resistant rice varieties has transformed farming in semi-arid regions. She’s a mentor to young agri-researchers and a vocal advocate for sustainable biotech.',
    fees: 1200,
    address: {
      line1: 'ICAR Research Campus',
      line2: 'Hyderabad, Telangana'
    }
  },
  {
    _id: 'Sci2',
    name: 'Dr. Rajeev Menon',
    image: Sci2,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '15 Years',
    about: 'Dr. Menon specializes in soil health diagnostics and nutrient mapping. His precision farming models help farmers reduce input costs while boosting yield. He’s known for translating complex data into actionable field advice.',
    fees: 1000,
    address: {
      line1: 'Krishi Bhavan',
      line2: 'Thrissur, Kerala'
    }
  },
  {
    _id: 'Lab3',
    name: 'Ravi Kumar',
    image: Lab3,
    speciality: 'Skilled Labours',
    Certified: 'no',
    experience: '3 Years',
    about: 'Ravi handles mechanized land preparation and tractor operations with efficiency. He’s known for timely service and deep knowledge of terrain-specific tilling techniques.',
    fees: 400,
    address: {
      line1: 'Sector 12',
      line2: 'Noida, UP'
    }
  },
  {
    _id: 'Lab4',
    name: 'Meena Kumari',
    image: Lab4,
    speciality: 'Skilled Labours',
    Certified: 'yes',
    experience: '5 Years',
    about: 'Meena excels in paddy transplantation and nursery management. Her attention to detail ensures high germination rates and healthy crop cycles.',
    fees: 550,
    address: {
      line1: 'Kisan Nagar',
      line2: 'Gorakhpur, UP'
    }
  },
  {
    _id: 'Sci3',
    name: 'Dr. Neha Kapoor',
    image: Sci3,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '10 Years',
    about: 'Dr. Kapoor investigates crop diseases and fungal outbreaks. Her early detection models have saved thousands of acres from blight. She’s passionate about farmer education and regularly conducts field workshops.',
    fees: 950,
    address: {
      line1: 'Agri Diagnostics Lab',
      line2: 'Indore, MP'
    }
  },
  {
    _id: 'Sci4',
    name: 'Dr. Sameer Qureshi',
    image: Sci4,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '13 Years',
    about: 'Dr. Qureshi designs adaptive farming systems for changing weather patterns. His work integrates AI forecasting with traditional wisdom, helping farmers plan better under uncertainty.',
    fees: 1100,
    address: {
      line1: 'Centre for Agroclimatic Research',
      line2: 'Jaipur, Rajasthan'
    }
  },
  {
    _id: 'Lab5',
    name: 'Arvind Patel',
    image: Lab5,
    speciality: 'Skilled Labours',
    Certified: 'yes',
    experience: '7 Years',
    about: 'Arvind specializes in drip and sprinkler irrigation systems. He’s trusted for his ability to optimize water usage and troubleshoot system faults quickly.',
    fees: 700,
    address: {
      line1: 'Plot 45, AgriTech Lane',
      line2: 'Lucknow, UP'
    }
  },
  {
    _id: 'Lab6',
    name: 'Kailash Yadav',
    image: Lab6,
    speciality: 'Skilled Labours',
    Certified: 'yes',
    experience: '8 Years',
    about: 'Kailash has mastered the art of sugarcane farming, from ratooning techniques to efficient irrigation. He’s known for maximizing yield while maintaining soil health.',
    fees: 650,
    address: {
      line1: 'Bhatauli Village',
      line2: 'Bijnor, UP'
    }
  },
  {
    _id: 'Sci5',
    name: 'Dr. Kavita Joshi',
    image: Sci5,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '9 Years',
    about: 'Dr. Joshi focuses on fruit and vegetable cultivation, storage, and value addition. Her innovations in cold chain logistics and packaging have reduced spoilage and boosted farmer profits.',
    fees: 1050,
    address: {
      line1: 'HortiTech Lab',
      line2: 'Shimla, Himachal Pradesh'
    }
  },
  {
    _id: 'Lab7',
    name: 'Pushpa Rani',
    image: Lab7,
    speciality: 'Skilled Labours',
    Certified: 'yes',
    experience: '6 Years',
    about: 'Pushpa specializes in cotton cultivation, with deep knowledge of pest-resistant varieties and integrated pest management. Her fields consistently show high boll formation.',
    fees: 700,
    address: {
      line1: 'Ward 5, Kisan Colony',
      line2: 'Kanpur, UP'
    }
  },
  {
    _id: 'Lab8',
    name: 'Imran Sheikh',
    image: Lab8,
    speciality: 'Skilled Labours',
    Certified: 'no',
    experience: '5 Years',
    about: 'Imran focuses on pulses like moong, urad, and masoor. He’s skilled in crop rotation strategies that boost nitrogen levels and improve long-term soil fertility.',
    fees: 500,
    address: {
      line1: 'Tehsil Road',
      line2: 'Raebareli, UP'
    }
  },
  {
    _id: 'Sci6',
    name: 'Dr. Vinod Rathi',
    image: Sci6,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '14 Years',
    about: 'Dr. Rathi is a leading expert in nutrient mapping and soil fertility restoration. His work helps farmers reduce chemical dependency by optimizing organic inputs and micronutrient balance.',
    fees: 950,
    address: {
      line1: 'Agri Soil Lab',
      line2: 'Meerut, UP'
    }
  },
  {
    _id: 'Sci7',
    name: 'Dr. Shalini Deshmukh',
    image: Sci7,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '11 Years',
    about: 'Dr. Deshmukh studies microbial interactions in soil ecosystems. Her research on beneficial fungi and bacteria has led to breakthroughs in natural disease resistance and root health.',
    fees: 1100,
    address: {
      line1: 'Microbial Research Centre',
      line2: 'Nagpur, Maharashtra'
    }
  },
  {
    _id: 'Sci8',
    name: 'Dr. Faizan Ali',
    image: Sci8,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '13 Years',
    about: 'Dr. Faizan promotes carbon-rich farming practices that restore degraded soils. His regenerative models combine cover cropping, composting, and minimal tillage for long-term sustainability.',
    fees: 1200,
    address: {
      line1: 'Centre for Regenerative Farming',
      line2: 'Aligarh, UP'
    }
  },
  {
    _id: 'Sci9',
    name: 'Dr. Rupa Banerjee',
    image: Sci9,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '10 Years',
    about: 'Dr. Banerjee helps farmers reclaim saline and acidic soils through tailored amendments and crop selection. Her field trials have improved productivity in coastal and flood-prone zones.',
    fees: 980,
    address: {
      line1: 'Soil Reclamation Unit',
      line2: 'Kolkata, West Bengal'
    }
  },
  {
    _id: 'Lab9',
    name: 'Rekha Chauhan',
    image: Lab9,
    speciality: 'Skilled Labours',
    Certified: 'yes',
    experience: '7 Years',
    about: 'Rekha is a maize specialist with expertise in hybrid seed selection and precision sowing. Her work supports both fodder and grain production for local cooperatives.',
    fees: 600,
    address: {
      line1: 'Shivpuri Block',
      line2: 'Etawah, UP'
    }
  },
  {
    _id: 'Lab10',
    name: 'Harish Rawat',
    image: Lab10,
    speciality: 'Skilled Labours',
    Certified: 'yes',
    experience: '9 Years',
    about: 'Harish is a horticulture veteran, managing polyhouse setups for tomatoes, capsicum, and strawberries. He’s a go-to expert for climate-controlled farming.',
    fees: 800,
    address: {
      line1: 'Green Valley Farms',
      line2: 'Dehradun, Uttarakhand'
    }
  },
  {
    _id: 'Sci10',
    name: 'Dr. Arvind Nair',
    image: Sci10,
    speciality: 'Crop & Soil Advisory',
    Certified: 'yes',
    experience: '12 Years',
    about: 'Dr. Nair runs mobile soil testing labs and offers precision input recommendations. His data-driven approach helps farmers make informed decisions about fertilizers and crop rotation.',
    fees: 1050,
    address: {
      line1: 'Precision Agri Lab',
      line2: 'Ahmedabad, Gujarat'
    }
  }

]