import Fastify from 'fastify';
import { prefix } from './config/index.js';
import { routes } from './routes/location.routes.js';

export function build(opts={}) {
    const app = Fastify(opts);
    app.register(routes, { prefix });
  
    return app
  }