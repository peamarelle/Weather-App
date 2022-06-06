import { getLocationByIp } from '../controllers/location.controllers.js';
import swagger from '../config/swagger.js'
export const routes = async (fastify, options) => {
    fastify.get('/location', swagger.location, getLocationByIp);
}