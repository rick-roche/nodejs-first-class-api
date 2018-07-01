import * as Koa from 'koa';
import * as Router from 'koa-router';

import * as logger from 'winston';

const app = new Koa();
const router = new Router();

logger.configure({
    level: 'info',
    format: logger.format.combine(
        logger.format.timestamp(),
        logger.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
        new logger.transports.Console({
            format: logger.format.simple(),
        }),
    ],
});

router.get('/*', async ctx => {
    ctx.body = 'Hello World!';
});

app.use(router.routes());

app.listen(3000);

logger.info('Koa application is up and running on port 3000');
