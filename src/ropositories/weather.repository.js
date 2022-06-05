import fetch from 'node-fetch';
import { API_KEY, WEATHER_PATHBASE, FORECAST_PATHBASE } from '../config/index.js';

export class WeatherRepository {
    constructor() {
        this.basepath = WEATHER_PATHBASE;
        this.forecastPathBase = FORECAST_PATHBASE;
        this.api_key = API_KEY;
    }

    async findWeatherByCoordinates(lat, lon) {
        const ipApiResponse = await fetch(`${this.basepath}?lat=${lat}&lon=${lon}&appid=${this.api_key}`);
        const { weather, main, visibility, wind, name } = await ipApiResponse.json();
        return { weather, main, visibility, wind, name };
    }

    async getForecastByCoordinates(lat, lon) {
        const ipApiResponse = await fetch(`${FORECAST_PATHBASE}?lat=${lat}&lon=${lon}&appid=${this.api_key}`);
        const forecast = await ipApiResponse.json();
        const list = forecast.list.map(item => (
            {
                main: item.main,
                weather: item.weather,
                visibility: item.visibility,
                wind: item.wind,
                date: item.dt_txt
            }));
        return {
            list,
            name: forecast.city.name,
        };
    }
}
