'use strict';

const HttpError = require('http-errors');
const Account = require('../models/account');

module.exports = (request, response, next) => {
  if (!request.headers.authorization) {
    return next(new HttpError(400, 'INVALID AUTHORIZATION'));
  }

  const base64Header = request.headers.authorization.split('Basic ')[1];
  if (!base64Header) {
    return next(new HttpError(400, 'INVALID AUTHORIZATION'));
  }

  const stringAuthHeader = Buffer.from(base64Header, 'base64').toString();
  const [username, password] = stringAuthHeader.split(':');

  if (!username || !password) {
    return next(new HttpError(400, 'INVALID AUTHORIZATION'));
  }

  return Account.findOne({ username })
    .then((account) => {
      if (!account) {
        return next(new HttpError(400, 'INVALID AUTHORIZATION'));
      }
      return account.pVerifyPassword(password);
    })
    .then((matchedAccount) => {
      request.account = matchedAccount;
      return next();
    })
    .catch(next);
};
