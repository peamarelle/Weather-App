const fastify = require('fastify')({logger: true});
require('dotenv').config();
const PORT = process.env.PORT || 3000;

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