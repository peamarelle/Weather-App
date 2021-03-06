import Fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import { prefix } from './config/index.js';
import { routes as locationRoutes } from './routes/location.routes.js';
import { routes as weatherRoutes } from './routes/weather.routes.js';
import swagger from './config/swagger.js';

export async function build(opts = {}) {
    const app = Fastify(opts);
    await app.register(fastifySwagger, swagger.options);
    app.register(locationRoutes, { prefix });
    app.register(weatherRoutes, { prefix });
    app.setErrorHandler(function (error, request, reply) {
        const statusCode = error.statusCode || 500;
        reply.status(statusCode).send({ status: 'Error', data: error });
    })
    await app.ready();
    app.swagger();
    return app
}