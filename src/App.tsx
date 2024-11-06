import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import WeatherCard from './components/WeatherCard';
import { useWeather } from './hooks/useWeather';

function App() {
  const [city, setCity] = useState('New York');
  const { weather, loading, error } = useWeather(city);

  const backgroundImages = {
    day: 'https://images.unsplash.com/photo-1601297183305-6df142704ea2?auto=format&fit=crop&w=1920&q=80',
    night: 'https://images.unsplash.com/photo-1507400492013-162706c8c05e?auto=format&fit=crop&w=1920&q=80',
    noon: 'https://images.unsplash.com/photo-1598965402089-897ce52e8355?auto=format&fit=crop&w=1920&q=80',
    rainy: 'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1920&q=80',
    cloudy: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1920&q=80',
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${weather ? backgroundImages[weather.time] : backgroundImages.day})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name..."
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-white/70 outline-none focus:ring-2 focus:ring-white/50"
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white/70" />
          </div>
        </div>

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-center"
          >
            Loading...
          </motion.div>
        ) : error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-400 text-center"
          >
            {error}
          </motion.div>
        ) : weather ? (
          <WeatherCard data={weather} />
        ) : null}
      </div>
    </div>
  );
}

export default App;