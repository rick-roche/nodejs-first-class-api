import * as Koa from 'koa';
import * as compress from 'koa-compress';
import * as koaLogger from 'koa-pino-logger';
import * as responseTime from 'koa-response-time';
import * as Router from 'koa-router';

import { logger } from './lib/Logger';

const app = new Koa();
const router = new Router();

// app.use(async (ctx, next) => {
//     // Log the request to the console
//     winston.debug(`Url: ${ctx.url}`);
//     // Pass the request to the next middleware function
//     await next();
// });

// logging
app.use(koaLogger());
// x-response-time
app.use(responseTime());
// compression
app.use(compress());

router.get('/*', async ctx => {
    ctx.body = 'Hello World!';
});
app.use(router.routes());

app.listen(3000);

logger.info('Koa application is up and running on port 3000');
