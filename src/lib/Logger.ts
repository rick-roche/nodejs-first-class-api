import * as pino from 'pino';

export const logger = pino({
    name: 'my-api',
    level: 'debug',
});
