import express from 'express';
import cors from 'cors';
import routes from './routes';
import log from './app/middlewares/log';
import 'dotenv/config';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(log('tiny'));
    this.server.use(cors());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
