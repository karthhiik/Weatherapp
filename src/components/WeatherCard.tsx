import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Cloud, CloudRain, CloudSun } from 'lucide-react';
import type { WeatherData } from '../types/weather';

const WeatherIcon: React.FC<{ time: WeatherData['time'] }> = ({ time }) => {
  const icons = {
    day: Sun,
    night: Moon,
    noon: CloudSun,
    rainy: CloudRain,
    cloudy: Cloud,
  };

  const Icon = icons[time];
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="text-4xl mb-4"
    >
      <Icon size={64} className="text-yellow-500" />
    </motion.div>
  );
};

const WeatherCard: React.FC<{ data: WeatherData }> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl w-full max-w-md"
    >
      <div className="flex flex-col items-center">
        <WeatherIcon time={data.time} />
        <h2 className="text-3xl font-bold text-white mb-2">{data.location}</h2>
        <div className="text-5xl font-bold text-white mb-4">
          {Math.round(data.temperature)}°C
        </div>
        <p className="text-xl text-white/80 capitalize">{data.condition}</p>
      </div>
    </motion.div>
  );
};

export default WeatherCard;