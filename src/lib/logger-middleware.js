'use strict';

const logger = require('./logger');

module.exports = (request, response, next) => {
  logger.log(logger.INFO, `Processing a ${request.method} request on ${request.url}`);

  return next();
};
