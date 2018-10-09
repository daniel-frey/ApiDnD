'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

const Account = require('../models/account');
const logger = require('../lib/logger');
const basicAccMiddleware = require('../lib/basic-account-middleware');

const jsonParser = bodyParser.json();
const router = module.exports = new express.router();
