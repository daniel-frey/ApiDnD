'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

const Account = require('../models/account');
const logger = require('../lib/logger');
const basicAccMiddleware = require('../lib/basic-account-middleware');

const jsonParser = bodyParser.json();
const router = module.exports = new express.Router();


// ============================================================================
// ACCOUNT SIGN-UP
// ============================================================================
router.post('/api/signup', jsonParser, (request, response, next) => {
  if (!request.body.password) {
    return next(new HttpError(401, ''));
  }
  return Account.create(request.body.username, request.body.password, request.body.email)
    .then((createdAccount) => {
      delete request.body.password;
      logger.log(logger.INFO, 'Creating token');
      return createdAccount.pCreateToken();
    })
    .then((token) => {
      return response.json({ token });
    })
    .catch(next);
});

// ============================================================================
// ACCOUNT LOG-IN
// ============================================================================
router.get('api/login', basicAccMiddleware, (request, response, next) => {
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
