import { findLocation } from './common.js';
import { LocationRepository } from '../ropositories/location.repository.js';
import { WeatherRepository } from '../ropositories/weather.repository.js';
const locationRepository = new LocationRepository();
const weatherRepository = new WeatherRepository();

export const getCurrentWeatherStatus = async (request, reply) => {
    try {
        const { lat, lon } = await findLocation(request);
        const weather = await weatherRepository.findWeatherByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: weather });
    } catch (error) {
        reply.code(500).send({ status: 'Error', data: {} });
    }
}

export const getCityWeatherStatus = async (request, reply) => {
    try {
        const { city } = request.params;
        const { lat, lon } = await locationRepository.findCityCoordinates(city);
        const weather = await weatherRepository.findWeatherByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: weather });
    } catch (error) {
        reply.code(500).send({ status: 'Error', data: {} });
    }
}

export const getCurrentForecast = async (request, reply) => {
    try {
        const { lat, lon } = await findLocation(request);
        const farecast = await weatherRepository.getForecastByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: farecast });
    } catch (error) {
        reply.code(500).send({ status: 'Error', data: {} });
    }
}

export const getCityForecast = async (request, reply) => {
    try {
        const { city } = request.params;
        const { lat, lon } = await locationRepository.findCityCoordinates(city);
        console.log('corrdinates', lat, lon);
        const farecast = await weatherRepository.getForecastByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: farecast });
    } catch (error) {
        reply.code(500).send({ status: 'Error', data: {} });
    }
}