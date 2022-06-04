import dotnev from 'dotenv';
dotnev.config();

export const PORT = process.env.PORT || 3000;
export const IP_API_URL = process.env.IP_API_URL;
export const prefix = '/v1';
export const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
export const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN;
export const WEATHER_PATHBASE = process.env.WEATHER_PATHBASE;
export const FORECAST_PATHBASE = process.env.FORECAST_PATHBASE;
export const MAPBOX_PATHBASE = process.env.MAPBOX_PATHBASE;