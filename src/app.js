import Fastify from 'fastify';
import { prefix } from './config/index.js';
import { routes as locationRoutes } from './routes/location.routes.js';
import { routes as weatherRoutes } from './routes/weather.routes.js';

export function build(opts = {}) {
    const app = Fastify(opts);
    app.register(locationRoutes, { prefix });
    app.register(weatherRoutes, { prefix });

    return app
}