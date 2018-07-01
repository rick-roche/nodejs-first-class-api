import { createServer } from './server';
import { logger } from './utils/Logger';

export async function init() {
    try {
        logger.info('Starting HTTP server');

        const port = Number(process.env.PORT) || 3000;
        const app = createServer(logger);

        app.listen(port);

        logger.info(`Application running on port: ${port}`);
    } catch (e) {
        logger.error(e, 'An error occurred while initializing application.');
    }
}

init();
