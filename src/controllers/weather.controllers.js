import { findLocation } from './common.js';
import { LocationRepository } from '../ropositories/location.repository.js';
import { WeatherRepository } from '../ropositories/weather.repository.js';
const locationRepository = new LocationRepository();
const weatherRepository = new WeatherRepository();

export const getCurrentWeatherStatus = async (request, reply, next) => {
    try {
        const { lat, lon } = await findLocation(request);
        const weather = await weatherRepository.findWeatherByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: weather });
    } catch (error) {
        next(error);
    }
}

export const getCityWeatherStatus = async (request, reply, next) => {
    try {
        const { city } = request.params;
        const { lat, lon } = await locationRepository.findCityCoordinates(city);
        const weather = await weatherRepository.findWeatherByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: weather });
    } catch (error) {
        next(error);
    }
}

export const getCurrentForecast = async (request, reply, next) => {
    try {
        const { lat, lon } = await findLocation(request);
        const farecast = await weatherRepository.getForecastByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: farecast });
    } catch (error) {
        next(error);
    }
}

export const getCityForecast = async (request, reply, next) => {
    try {
        const { city } = request.params;
        const { lat, lon } = await locationRepository.findCityCoordinates(city);
        console.log('corrdinates', lat, lon);
        const farecast = await weatherRepository.getForecastByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: farecast });
    } catch (error) {
        next(error);
    }
}