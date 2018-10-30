'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');
const Character = require('../models/character');
const logger = require('../lib/logger');
const bearerAuthMiddleware = require('../lib/bearer-auth-middleware');

const jsonParser = bodyParser.json();
const router = module.exports = new express.Router();

// ====================================================================
// GET
// ====================================================================
router.get('/api/characters', bearerAuthMiddleware, jsonParser, (request, response, next) => {
  return Character.findById(request.params.id)
    .then((character) => {
      if (character) {
        logger.log(logger.INFO, 'Responding with 200 status code and an existing character');
        return response.json(character);
      }
      logger.log(logger.INFO, 'Responding with 404 status code. Character not found');
      return next(new HttpError(404, 'not found'));
    })
    .catch(next);
});

// ====================================================================
// POST
// ====================================================================
router.post('/api/characters', jsonParser, (request, response, next) => {
  return new Character(request.body).save()
    .then((newCharacter) => {
      logger.log(logger.INFO, 'Responding with a 200 status code');
      return response.json(newCharacter);
    })
    .catch(next);
});

// ====================================================================
// DELETE
// ====================================================================
router.delete('/api/characters', bearerAuthMiddleware, (request, response, next) => {
  return Character.findByIdAndRemove(request.params.id)
    .then((character) => {
      if (character) {
        logger.log(logger.INFO, 'Character removed');
        return response.json(204, character);
      }
      logger.log(logger.INFO, 'Character could not be found');
      return next(new HttpError(404, 'Character not found'));
    })
    .catch(next);
});

// ====================================================================
// PUT
// ====================================================================
router.put('/api/characters', bearerAuthMiddleware, jsonParser, (request, response, next) => {
  const updateOptions = {
    runValidators: true,
    new: true,
  };
  return Character.findByIdAndUpdate(request.params.id, request.body, updateOptions)
    .then((modifiedCharacter) => {
      if (modifiedCharacter) {
        logger.log(logger.INFO, 'Responding with 200 and an update character');
        return response.json(modifiedCharacter);
      }
      logger.log(logger.INFO, '404');
      return next(new HttpError(404, 'Character could not be found'));
    })
    .catch(next);
});
