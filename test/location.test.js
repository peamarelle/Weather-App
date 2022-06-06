import { isInReservedRange } from '../src/helpers/index.js';
import {LocationRepository} from '../src/ropositories/location.repository.js';
const RESERVED_IP = '127.0.0.1', IP = '128.0.0.1';

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
    test('should be return json object', () => {
        const result = new LocationRepository().findByIp(IP);
        expect(result).toBeInstanceOf(Object);
    })
})