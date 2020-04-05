import express from 'express';
import routes from './routes';
import log from './middlewares/log';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(log('tiny'));
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
