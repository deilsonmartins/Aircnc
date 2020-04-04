import express from 'express';

import Routes from '../routes';

import path from 'path';

import cors from 'cors';

import '../database';

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  routes() {
    this.server.use(Routes);
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use('/files', express.static(path.resolve(__dirname, '..', '..', 'tmp', 'uploads')));
  }
}

export default new App().server;