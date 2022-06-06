import { isInReservedRange } from '../src/helpers/index.js';
import {LocationRepository} from '../src/ropositories/location.repository.js';
const RESERVED_IP = '127.0.0.1', 
IP = '128.0.0.1',
city = 'New York';

describe('isInReservedRange', () => {
    test('should be true if they recieve ip that start with 127', () => {
        const result = isInReservedRange(RESERVED_IP);
        expect(result).toBe(true);
    });

    test('should be false if they recieve ip that not start with 127', () => {
        const result = isInReservedRange(IP);
        expect(result).toBe(false);
    });
});

describe('LocationRepository', () => {
    test('should return with an object', async () => {
        const result = await new LocationRepository().findByIp(IP);
        expect(result).toBeInstanceOf(Object);
    })

    test('should return with an object that contains lat property', async () => {
        const result = await new LocationRepository().findCityCoordinates(city);
        expect(result).toHaveProperty('lat');
    })

    test('should return with an object that contains lon property', async () => {
        const result = await new LocationRepository().findCityCoordinates(city);
        expect(result).toHaveProperty('lon');
    })
})