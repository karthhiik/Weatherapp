export interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  time: 'day' | 'night' | 'noon' | 'rainy' | 'cloudy';
}

export interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: Array<{
    main: string;
    description: string;
  }>;
  name: string;
}