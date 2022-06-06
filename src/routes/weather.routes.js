import {
    getCurrentWeatherStatus,
    getCityWeatherStatus,
    getCurrentForecast,
    getCityForecast
} from '../controllers/weather.controllers.js';
import swagger from '../config/swagger.js';

export const routes = async (fastify, options) => {
    fastify.get('/weather', swagger.weatherWithoutParams, getCurrentWeatherStatus);
    fastify.get('/weather/:city', swagger.weatherWithParam, getCityWeatherStatus);
    fastify.get('/forecast', swagger.forecatsWithoutParams, getCurrentForecast);
    fastify.get('/forecast/:city', swagger.forecatsWithParams, getCityForecast);
}