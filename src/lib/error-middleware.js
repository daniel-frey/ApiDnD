'use strict';

const logger = require('./logger');

module.exports = (error, request, response, next) => { //eslint-disable-line
  logger.log(logger.ERROR, 'ERROR_MIDDLEWARE');
  logger.log(logger.ERROR, error);

  const errorMessage = error.message.toLowerCase();

  if (errorMessage.includes('validation failed')) {
    logger.log(logger.ERROR, 'Responding with a 400 code VALIDATION FAILED.');
    return response.sendStatus(400);
  }
  if (errorMessage.includes('duplicate key')) {
    logger.log(logger.ERROR, 'Responding with a 409 code due to a duplicate value.');
    return response.sendStatus(409);
  }
  logger.log(logger.ERROR, 'Not Found');
  return response.sendStatus(404);
};
