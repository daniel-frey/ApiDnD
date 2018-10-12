'use strict';

const faker = require('faker');
const superagent = require('superagent');
const accountMock = require('./lib/account-mock');
const server = require('../lib/server');

const API_URL = `http://localhost:${process.env.PORT}`;

describe('Account authentication tests', () => {
  beforeAll(server.start);
  afterAll(server.stop);
  beforeEach(accountMock.pCleanAccountMocks);

  test('return a 200 status code and a token', () => {
    return superagent.post(`${API_URL}/api/signup`)
      .send({
        username: faker.lorem.words(1),
        password: faker.lorem.words(1),
        email: faker.internet.email(),
      })
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body.token).toBeTruthy();
      });
  });

  test('return a 400 code if no request body is provided or the body provided is invalid', () => {
    return superagent.post(`${API_URL}/api/signup`)
      .send({
        incorrectBody: '',
      })
      .then(Promise.reject)
      .catch((response) => {
        expect(response.status).toEqual(401);
      });
  });

  test('return a 404 if the route is invalid', () => {
    return superagent.post(`${API_URL}/api/incorrectRoute`)
      .send({
        username: faker.lorem.words(1),
        email: faker.internet.email(),
        password: faker.lorem.words(1),
      })
      .then(Promise.reject)
      .catch((response) => {
        expect(response.status).toEqual(404);
      });
  });

  test('return a 200 status code and a token if logged in correctly', () => {
    return accountMock.pCreateMock()
      .then((mock) => {
        return superagent.get(`${API_URL}/api/login`)
          .auth(mock.request.username, mock.request.password);
      })
      .then((response) => {
        expect(response.status).toEqual(200);
        expect(response.body.token).toBeTruthy();
      });
  });

  test('return a 400 status code if the request is not valid', () => {
    return accountMock.pCreateMock()
      .then((mock) => {
        return superagent.get(`${API_URL}/api/login`)
          .auth(mock.request.incorrectUsername, mock.request.password);
      })
      .then(Promise.reject)
      .catch((response) => {
        expect(response.status).toEqual(400);
      });
  });
});
