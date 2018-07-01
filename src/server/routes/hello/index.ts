import * as Koa from 'koa';
import * as Router from 'koa-router';

export function init(server: Koa) {
    const router = new Router();

    router.get('/*', async ctx => {
        ctx.body = 'Hello World!';
    });

    server.use(router.routes());
}
