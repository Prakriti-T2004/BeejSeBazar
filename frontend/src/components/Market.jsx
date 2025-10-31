import React, { useState, useEffect } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const MarketAnalysis = () => {
  const [selectedCategory, setSelectedCategory] = useState('vegetables');
  const [timeRange, setTimeRange] = useState('weekly');
  const [marketData, setMarketData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock market data
  const fetchMarketData = () => {
    setLoading(true);
    
    setTimeout(() => {
      const mockData = {
        vegetables: {
          products: [
            { name: 'Tomatoes', price: 45, demand: 'High', change: '+5%', unit: 'kg' },
            { name: 'Potatoes', price: 25, demand: 'Medium', change: '-2%', unit: 'kg' },
            { name: 'Onions', price: 30, demand: 'High', change: '+8%', unit: 'kg' },
            { name: 'Carrots', price: 35, demand: 'Medium', change: '+3%', unit: 'kg' },
            { name: 'Bell Peppers', price: 60, demand: 'Low', change: '-5%', unit: 'kg' },
            { name: 'Spinach', price: 40, demand: 'High', change: '+12%', unit: 'bunch' }
          ],
          priceTrends: {
            weekly: [40, 42, 38, 45, 47, 43, 45],
            monthly: [35, 38, 40, 42, 45, 43, 40, 38, 42, 45, 47, 45],
            yearly: [30, 32, 35, 38, 40, 42, 45, 43, 40, 38, 42, 45]
          },
          demandTrends: {
            High: 60,
            Medium: 30,
            Low: 10
          }
        },
        grains: {
          products: [
            { name: 'Rice', price: 50, demand: 'Very High', change: '+10%', unit: 'kg' },
            { name: 'Wheat', price: 30, demand: 'High', change: '+3%', unit: 'kg' },
            { name: 'Corn', price: 25, demand: 'Medium', change: '-1%', unit: 'kg' },
            { name: 'Barley', price: 35, demand: 'Low', change: '-4%', unit: 'kg' },
            { name: 'Oats', price: 40, demand: 'Medium', change: '+2%', unit: 'kg' },
            { name: 'Millet', price: 45, demand: 'High', change: '+7%', unit: 'kg' }
          ],
          priceTrends: {
            weekly: [45, 47, 48, 50, 52, 49, 50],
            monthly: [40, 42, 45, 47, 50, 48, 45, 47, 50, 52, 50, 50],
            yearly: [35, 38, 40, 42, 45, 47, 50, 48, 45, 47, 50, 50]
          },
          demandTrends: {
            'Very High': 40,
            'High': 30,
            'Medium': 20,
            'Low': 10
          }
        }
      };
      
      setMarketData(mockData);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchMarketData();
  }, []);

  // Chart data configuration
  const getPriceChartData = () => {
    const trends = marketData[selectedCategory].priceTrends[timeRange];
    const labels = timeRange === 'weekly' 
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : timeRange === 'monthly'
      ? Array.from({length: 12}, (_, i) => `Week ${i+1}`)
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    return {
      labels,
      datasets: [
        {
          label: `Price Trend (₹/${selectedCategory === 'vegetables' ? 'kg' : 'kg'})`,
          data: trends,
          borderColor: 'rgb(75, 192, 192)',
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          tension: 0.1,
          fill: true
        }
      ]
    };
  };

  const getDemandChartData = () => {
    const trends = marketData[selectedCategory].demandTrends;
    
    return {
      labels: Object.keys(trends),
      datasets: [
        {
          label: 'Demand Distribution (%)',
          data: Object.values(trends),
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)'
          ],
          borderWidth: 1
        }
      ]
    };
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Market Trends Analysis',
      },
    },
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-green-800 text-lg">Loading market data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4">
      <div className="w-[1080px] mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">🌾 Agricultural Market Analysis</h1>
          <p className="text-green-600">Real-time market prices and demand trends for agricultural products</p>
        </div>

        {/* Category Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <button
              onClick={() => setSelectedCategory('vegetables')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === 'vegetables'
                  ? 'bg-green-600 text-white'
                  : 'bg-green-100 text-green-800 hover:bg-green-200'
              }`}
            >
              🥦 Vegetables
            </button>
            <button
              onClick={() => setSelectedCategory('grains')}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                selectedCategory === 'grains'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
              }`}
            >
              🌾 Grains & Cereals
            </button>
          </div>

          {/* Time Range Selector */}
          <div className="flex justify-center gap-4 mb-6">
            {['weekly', 'monthly', 'yearly'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-4 py-2 rounded-lg font-medium capitalize ${
                  timeRange === range
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Market Data Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Price Trends Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Price Trends</h2>
            <div className="h-80">
              <Line data={getPriceChartData()} options={chartOptions} />
            </div>
          </div>

          {/* Demand Distribution Chart */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-4">Demand Distribution</h2>
            <div className="h-80">
              <Pie data={getDemandChartData()} options={chartOptions} />
            </div>
          </div>
        </div>

        {/* Current Market Prices */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">Current Market Prices & Demand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {marketData[selectedCategory].products.map((product, index) => (
              <div key={index} className="border border-green-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg text-green-800">{product.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    product.demand === 'Very High' || product.demand === 'High'
                      ? 'bg-red-100 text-red-800'
                      : product.demand === 'Medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {product.demand} Demand
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-green-700">₹{product.price}</span>
                  <span className={`px-2 py-1 rounded text-sm font-medium ${
                    product.change.startsWith('+')
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {product.change}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">per {product.unit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="bg-yellow-50 rounded-xl shadow-lg p-6 border border-yellow-200">
          <h2 className="text-2xl font-bold text-amber-800 mb-4">📈 Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-amber-700 mb-2">Current Trends:</h3>
              <ul className="list-disc pl-5 text-amber-800 space-y-1">
                <li>Rice prices increased by 10% due to high export demand</li>
                <li>Tomato prices stabilizing after last month's surge</li>
                <li>Wheat demand remains consistently high</li>
                <li>Organic vegetables showing 15% premium pricing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-700 mb-2">Recommendations:</h3>
              <ul className="list-disc pl-5 text-amber-800 space-y-1">
                <li>Consider increasing rice cultivation for better returns</li>
                <li>Diversify with high-demand vegetables like tomatoes and onions</li>
                <li>Explore organic farming for premium pricing</li>
                <li>Monitor weather patterns for planting decisions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center mt-8 text-gray-600">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p className="text-sm">Data refreshes every 30 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default MarketAnalysis;