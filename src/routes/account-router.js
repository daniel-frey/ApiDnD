'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');
const faker = require('faker');

const Account = require('../models/account');
const logger = require('../lib/logger');
const Character = require('../models/character');
const premade = require('../lib/premade-class');
const dungeon = require('../lib/descriptions');
const bearerAuthMiddleware = require('../lib/bearer-auth-middleware');

const jsonParser = bodyParser.json();
const router = module.exports = new express.Router();

// ============================================================================
// ACCOUNT SIGN-UP
// ============================================================================
router.post('/api/signup', jsonParser, (request, response, next) => {
  let idToUser = 0;
  if (!request.body.password) {
    return next(new HttpError(401, ''));
  }
  return Account.create(request.body.username, request.body.email, request.body.password)
    .then((createdAccount) => {
      delete request.body.password;
      return new Character({
        name: faker.name.firstName(),
        class: premade.fighter,
        currentRoom: dungeon.dungeonDescriptions[0],
        account: createdAccount._id,
      }).save()
        .then((character) => {
          createdAccount.character.push(character._id);
          idToUser = character._id;
          character.save();
          logger.log(logger.INFO, 'Creating token');
          return createdAccount.pCreateToken();
        });
    })
    .then((token) => {
      logger.log(logger.INFO, 'Responding with a 200 status code and a token');
      return response.json(
        {
          token,
          id: idToUser,
        },
      );
    })
    .catch(error => next(error));
});

// ===============================+=============================================
// ACCOUNT LOG-IN
// ============================================================================
router.get('/api/login', bearerAuthMiddleware, (request, response, next) => {
  if (!request.account) {
    return next(new HttpError(400, 'bad request'));
  }
  return request.account.pCreateToken()
    .then((token) => {
      logger.log(logger.INFO, 'responding with 200 status code and a token');
      return response.json({ token });
    })
    .catch(next);
});
