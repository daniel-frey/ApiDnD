'use strict';

const faker = require('faker');
const superagent = require('superagent');
// const accountMock = require('./lib/account-mock');
const server = require('../lib/server');

const API_URL = `http://localhost:${process.env.PORT}`;

describe('Account authentication tests', () => {
  beforeAll(server.start);
  afterAll(server.stop);

  test('return a 200 status code and a token', () => {
    return superagent.post(`${API_URL}/api/signup`)
      .send({
        username: faker.lorem.words(1),
        email: faker.internet.email(),
        password: faker.lorem.words(1),
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
        expect(response.status).toEqual(404);
      });
  });
});
