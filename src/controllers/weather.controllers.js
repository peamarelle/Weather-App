import fetch from 'node-fetch';
import { findLocation } from './common.js';
import {
    WEATHER_PATHBASE,
    FORECAST_PATHBASE,
    API_KEY,
} from '../config/index.js';
import { LocationRepository } from '../ropositories/location.repository.js';
const locationRepository = new LocationRepository();

export const getCurrentWeatherStatus = async (request, reply) => {
    const loction = await findLocation(request);
    const ipApiResponse = await fetch(`${WEATHER_PATHBASE}?lat=${loction.lat}&lon=${loction.lon}&appid=${API_KEY}`);
    const weather = await ipApiResponse.json();
    reply.code(200).send({ status: 'Ok', data: weather });
}

export const getCityWeatherStatus = async (request, reply) => {
    try {
        const { city } = request.params;
        const [cityInformation] = await locationRepository.findByCity(city);
        const [lon, lat] = cityInformation.geometry.coordinates;
        const ipApiResponse = await fetch(`${WEATHER_PATHBASE}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const weather = await ipApiResponse.json();
        reply.code(200).send({ status: 'Ok', data: weather });
    } catch (error) {
        reply.code(200).send({ status: 'Ok', data: {} });
    }
}

export const getCurrentForecast = async (request, reply) => {
    try {
        const loction = await findLocation(request);
        const ipApiResponse = await fetch(`${FORECAST_PATHBASE}?lat=${loction.lat}&lon=${loction.lon}&appid=${API_KEY}`);
        const farecast = await ipApiResponse.json();
        reply.code(200).send({ status: 'Ok', data: farecast });
    } catch (error) {
        reply.code(200).send({ status: 'Ok', data: {} });
    }
}

export const getCityForecast = async (request, reply) => {
    try {
        const { city } = request.params;
        const [cityInformation] = await locationRepository.findByCity(city);
        const [lon, lat] = cityInformation.geometry.coordinates;
        const ipApiResponse = await fetch(`${FORECAST_PATHBASE}?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const farecast = await ipApiResponse.json();
        reply.code(200).send({ status: 'Ok', data: farecast });
    } catch (error) {
        reply.code(200).send({ status: 'Ok', data: {} });
    }
}