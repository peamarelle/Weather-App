import {
    getCurrentWeatherStatus,
    getCityWeatherStatus,
    getCurrentForecast,
    getCityForecast
} from '../controllers/weather.controllers.js';

export const routes = async (fastify, options) => {
    fastify.get('/weather', getCurrentWeatherStatus);
    fastify.get('/weather/:city', getCityWeatherStatus);
    fastify.get('/forecast', getCurrentForecast);
    fastify.get('/forecast/:city', getCityForecast);
}