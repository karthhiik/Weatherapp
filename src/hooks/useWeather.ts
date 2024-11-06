import { useState, useEffect } from 'react';
import type { WeatherData, WeatherResponse } from '../types/weather';

const API_KEY = '1234567890'; // Replace with your actual API key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const useWeather = (city: string) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        setLoading(true);
        // For demo purposes, using mock data
        const mockData: WeatherData = {
          location: 'New York',
          temperature: 22,
          condition: 'Sunny',
          time: 'day',
        };
        setWeather(mockData);
      } catch (err) {
        setError('Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weather, loading, error };
};