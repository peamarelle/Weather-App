import { findLocation } from './common.js';
import { LocationRepository } from '../ropositories/location.repository.js';
import { WeatherRepository } from '../ropositories/weather.repository.js';
const locationRepository = new LocationRepository();
const weatherRepository = new WeatherRepository();

export const getCurrentWeatherStatus = async (request, reply) => {
    const { lat, lon } = await findLocation(request);
    const weather = await weatherRepository.findWeatherByCoordinates(lat, lon);
    reply.code(200).send({ status: 'Ok', data: weather });
}

export const getCityWeatherStatus = async (request, reply) => {
    try {
        const { city } = request.params;
        const { lat, lon } = await locationRepository.findeCityCoordinates(city);
        const weather = await weatherRepository.findWeatherByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: weather });
    } catch (error) {
        reply.code(200).send({ status: 'Ok', data: {} });
    }
}

export const getCurrentForecast = async (request, reply) => {
    try {
        const { lat, lon } = await findLocation(request);
        const farecast = await weatherRepository.getForecastByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: farecast });
    } catch (error) {
        reply.code(200).send({ status: 'Ok', data: {} });
    }
}

export const getCityForecast = async (request, reply) => {
    try {
        const { city } = request.params;
        const { lat, lon } = await locationRepository.findCityCoordinates(city);
        const farecast = await weatherRepository.getForecastByCoordinates(lat, lon);
        reply.code(200).send({ status: 'Ok', data: farecast });
    } catch (error) {
        reply.code(200).send({ status: 'Ok', data: {} });
    }
}