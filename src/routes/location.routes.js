import { getLocationByIp } from '../controllers/location.controllers.js';

export const routes = async (fastify, options) => {
    fastify.get('/location', getLocationByIp);
}