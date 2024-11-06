export interface Weather {
  main: string;
  description: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  city: string;
  country: string;
  time: number;
}

export type WeatherCondition = 'Clear' | 'Clouds' | 'Rain' | 'Snow' | 'Thunderstorm';