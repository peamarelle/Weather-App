import RequestIp from '@supercharge/request-ip';
import { LocationRepository } from '../ropositories/location.repository.js';

export const findLocation = async (request) => {
    const ip = RequestIp.getClientIp(request);
    const locationRepository = new LocationRepository();
    return await locationRepository.findByIp(ip);
}