import { WeatherRepository } from '../src/ropositories/weather.repository.js';

describe('WeatherRepository', () => {
    test('should return with an object', async () => {
        const result = await new WeatherRepository().findWeatherByCoordinates(0, 0);
        expect(result).toBeInstanceOf(Object);
    })
    test('should return with an object that contains weather property', async () => {
        const result = await new WeatherRepository().findWeatherByCoordinates(0, 0);
        expect(result).toHaveProperty('weather');
    })
})