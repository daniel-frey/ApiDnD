'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const errorMiddleware = require('./error-middleware');
const loggerMiddleware = require('./logger-middleware');
const logger = require('./logger');
const accountRoutes = require('../routes/account-router');
const gameRoutes = require('../routes/game-router');

const app = express();

app.use(cors());
app.use(errorMiddleware);
app.use(loggerMiddleware);
app.use(accountRoutes);
app.use(gameRoutes);

app.all('*', (request, response) => {
  logger.log(logger.INFO, 'Returning a 404 error from catch-all route');
  return response.sendStatus(404);
});

const PORT = process.env.PORT || 3000;

const server = module.exports = {};
let internalServer = null;

server.start = () => {
  return mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      return internalServer = app.listen(PORT, () => { //eslint-disable-line
        logger.log(logger.INFO, `Server is up and listening at PORT: ${PORT}`);
      });
    });
};

server.stop = () => {
  return mongoose.disconnect()
    .then(() => {
      return internalServer.close(() => {
        logger.log(logger.INFO, 'Server OFFLINE.');
      });
    });
};
