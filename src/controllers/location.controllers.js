import fetch from 'node-fetch';
import RequestIp from '@supercharge/request-ip';
import { IP_API_URL } from '../config/index.js';
import { isInReservedRange } from '../helpers/index.js';

export const getLocationByIp = async (request, reply) => {
    const ip = RequestIp.getClientIp(request);
    const ipApiUrl = isInReservedRange(ip) ? `${IP_API_URL}` : `${IP_API_URL}/${ip}`;
    const ipApiResponse = await fetch(ipApiUrl);
    const ipApiData = await ipApiResponse.json();
    reply.code(200).send(ipApiData);
}