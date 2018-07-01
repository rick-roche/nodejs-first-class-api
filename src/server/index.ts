import { Server } from 'http';
import * as Koa from 'koa';
import * as compress from 'koa-compress';
import * as helmet from 'koa-helmet';
import * as responseTime from 'koa-response-time';
import { Logger } from 'pino';

import * as middlewares from './middlewares';
import * as routes from './routes';

export class AppServer {
    private app: Koa;
    private server: Server;

    constructor(app: Koa) {
        this.app = app;
        this.server = new Server();
    }

    public listen(port: number): Server {
        this.server = this.app.listen(port);
        return this.server;
    }

    public getServer(): Server {
        return this.server;
    }
}

export function createServer(logger: Logger): AppServer {
    const app = new Koa();
    const appSrv = new AppServer(app);

    // Register Middlewares
    app.use(responseTime());
    app.use(compress());
    app.use(helmet());
    app.use(middlewares.logRequest(logger));

    // Register routes
    routes.init(app);

    return appSrv;
}
