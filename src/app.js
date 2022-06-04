import Fastify from 'fastify';
const fastify = Fastify({ logger: true });
import { PORT, prefix } from './config/index.js';
import { routes } from './routes/location.routes.js';

fastify.register(routes, { prefix });

const start = async () => {
    try {
        await fastify.listen(PORT);
        fastify.log.info(`server listening on ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
}

start();

export default fastify;