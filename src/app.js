import Fastify from 'fastify';
import fastifySwagger from '@fastify/swagger';
import { prefix } from './config/index.js';
import { routes as locationRoutes } from './routes/location.routes.js';
import { routes as weatherRoutes } from './routes/weather.routes.js';
import { options } from './config/swagger.js';

export async function build(opts = {}) {
    const app = Fastify(opts);
    await app.register(fastifySwagger, options);
    app.register(locationRoutes, { prefix });
    app.register(weatherRoutes, { prefix });

    return app
}