import { build } from './app.js';
import { PORT } from './config/index.js';

const start = async () => {
    try {
        const server = await build({
            logger: {
                level: 'info'
            }
        })
        await server.listen(PORT);
        server.log.info(`server listening on ${server.server.address().port}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
}

start();