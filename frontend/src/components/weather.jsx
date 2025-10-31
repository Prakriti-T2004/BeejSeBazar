import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [location, setLocation] = useState('');

  // Simulated weather data
  const fetchWeatherData = () => {
    setLoading(true);
    
    setTimeout(() => {
      const mockWeatherData = {
        location: location || 'Agricultural Area',
        current: {
          temperature: 28,
          condition: 'Partly Cloudy',
          humidity: 65,
          wind: 12,
          rainfall: 0
        },
        forecast: [
          { day: 'Today', condition: 'Partly Cloudy', temp: { high: 30, low: 22 }, rainfall: 0, alert: null },
          { day: 'Tomorrow', condition: 'Heavy Rain', temp: { high: 25, low: 20 }, rainfall: 45, alert: 'heavy_rain' },
          { day: 'Day 3', condition: 'Light Rain', temp: { high: 26, low: 21 }, rainfall: 12, alert: null },
          { day: 'Day 4', condition: 'Sunny', temp: { high: 32, low: 24 }, rainfall: 0, alert: 'heat_wave' },
          { day: 'Day 5', condition: 'Cloudy', temp: { high: 29, low: 23 }, rainfall: 2, alert: null },
          { day: 'Day 6', condition: 'Sunny', temp: { high: 31, low: 25 }, rainfall: 0, alert: 'low_rainfall' },
          { day: 'Day 7', condition: 'Thunderstorms', temp: { high: 27, low: 21 }, rainfall: 38, alert: 'storm' }
        ],
        alerts: [
          { type: 'heavy_rain', message: 'Heavy rainfall expected tomorrow. Consider delaying irrigation and protecting sensitive crops.' },
          { type: 'heat_wave', message: 'High temperatures expected in 3 days. Increase watering frequency for vulnerable plants.' },
          { type: 'low_rainfall', message: 'Low rainfall forecast for the next week. Consider implementing water conservation measures.' },
          { type: 'storm', message: 'Thunderstorms predicted in 6 days. Secure equipment and protect crops from potential hail damage.' }
        ]
      };
      
      setWeatherData(mockWeatherData);
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    if (location.trim()) {
      fetchWeatherData();
    }
  };

  const handleShowAlerts = () => {
    setShowAlert(true);
  };

  const getAlertIcon = (alertType) => {
    switch(alertType) {
      case 'heavy_rain': return '⛈️';
      case 'heat_wave': return '🌡️';
      case 'low_rainfall': return '🏜️';
      case 'storm': return '🌩️';
      default: return '⚠️';
    }
  };

  const getConditionIcon = (condition) => {
    switch(condition.toLowerCase()) {
      case 'sunny': return '☀️';
      case 'partly cloudy': return '⛅';
      case 'cloudy': return '☁️';
      case 'light rain': return '🌦️';
      case 'heavy rain': return '🌧️';
      case 'thunderstorms': return '⛈️';
      default: return '🌤️';
    }
  };

  const getRainfallStatus = (rainfall) => {
    if (rainfall === 0) return 'No rainfall';
    if (rainfall < 10) return 'Light rainfall';
    if (rainfall < 30) return 'Moderate rainfall';
    return 'Heavy rainfall';
  };

  return (
    <div className="h-fit bg-gradient-to-br from-blue-100 to-blue-300 p-4">
      <div className="w-[1080px] mx-auto bg-white rounded-2xl shadow-xl p-6">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-4">
          🌦️ Agricultural Weather Predictions
        </h1>
        <p className="text-gray-600 text-center mb-8">
          7-day weather forecast tailored for farming needs
        </p>

        {/* Location Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center items-center">
          <input
            type="text"
            value={location}
            onChange={handleLocationChange}
            placeholder="Enter your location (e.g., City, Region)"
            className="flex-1 max-w-md px-4 py-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg"
          >
            Search
          </button>
          <button
            onClick={handleShowAlerts}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg flex items-center"
          >
            <span className="mr-2">⚠️</span> View Alerts
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600"></div>
            <span className="ml-4 text-blue-800 text-lg">Loading weather data...</span>
          </div>
        ) : (
          <>
            {/* Current Weather */}
            <div className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">Current Weather in {weatherData.location}</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-700">{weatherData.current.temperature}°C</div>
                  <div className="text-gray-600 mt-2">Temperature</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl">{getConditionIcon(weatherData.current.condition)}</div>
                  <div className="text-gray-600 mt-2">{weatherData.current.condition}</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-700">{weatherData.current.humidity}%</div>
                  <div className="text-gray-600 mt-2">Humidity</div>
                </div>
                <div className="text-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-4xl font-bold text-blue-700">{weatherData.current.rainfall}mm</div>
                  <div className="text-gray-600 mt-2">Rainfall</div>
                </div>
              </div>
            </div>

            {/* Weather Forecast */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">7-Day Forecast</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                {weatherData.forecast.map((day, index) => (
                  <div key={index} className={`bg-white p-4 rounded-xl border-2 ${day.alert ? 'border-yellow-400 bg-yellow-50' : 'border-blue-200'} text-center shadow-sm hover:shadow-md transition-shadow`}>
                    <div className="font-semibold text-blue-800 text-lg mb-2">{day.day}</div>
                    <div className="text-4xl my-3">{getConditionIcon(day.condition)}</div>
                    <div className="text-sm text-gray-700 mb-2">{day.condition}</div>
                    <div className="text-sm font-bold text-gray-800">{day.temp.high}° / {day.temp.low}°</div>
                    <div className="text-xs mt-2 text-blue-600 font-medium">{getRainfallStatus(day.rainfall)}</div>
                    {day.alert && (
                      <div className="text-xs mt-2 text-red-600 font-semibold">⚠️ Alert</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Agricultural Recommendations */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h2 className="text-2xl font-bold text-green-800 mb-4">Farming Recommendations</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-700 mb-3 text-lg">This Week's Outlook:</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Moderate rainfall expected in the middle of the week</li>
                    <li>Good growing conditions for most crops</li>
                    <li>Ideal temperatures for planting warm-season vegetables</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-700 mb-3 text-lg">Suggested Activities:</h3>
                  <ul className="list-disc pl-5 text-gray-700 space-y-2">
                    <li>Schedule irrigation before the dry period</li>
                    <li>Harvest before heavy rain arrives</li>
                    <li>Apply fertilizer after the rainfall</li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Alert Modal */}
        {showAlert && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
              <h2 className="text-2xl font-bold text-yellow-700 mb-4 flex items-center">
                ⚠️ Weather Alerts for {weatherData?.location}
              </h2>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {weatherData?.alerts.map((alert, index) => (
                  <div key={index} className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <div className="flex items-start">
                      <span className="text-2xl mr-3">{getAlertIcon(alert.type)}</span>
                      <p className="text-yellow-800">{alert.message}</p>
                    </div>
                  </div>
                ))}
                
                {(!weatherData?.alerts || weatherData.alerts.length === 0) && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200 text-center">
                    <p className="text-green-800">No active weather alerts at this time.</p>
                  </div>
                )}
              </div>
              
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowAlert(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;