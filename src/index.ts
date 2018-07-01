import * as Koa from 'koa';
import * as compress from 'koa-compress';
import * as logger from 'koa-logger';
import * as responseTime from 'koa-response-time';
import * as Router from 'koa-router';
import * as winston from 'winston';

const app = new Koa();
const router = new Router();

winston.configure({
    level: 'debug',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [
        new winston.transports.Console({
            format: winston.format.simple(),
        }),
    ],
});

// app.use(async (ctx, next) => {
//     // Log the request to the console
//     winston.debug(`Url: ${ctx.url}`);
//     // Pass the request to the next middleware function
//     await next();
// });

// logging
app.use(logger());
// x-response-time
app.use(responseTime());
// compression
app.use(compress());

router.get('/*', async ctx => {
    ctx.body = 'Hello World!';
});
app.use(router.routes());

app.listen(3000);

winston.info('Koa application is up and running on port 3000');
