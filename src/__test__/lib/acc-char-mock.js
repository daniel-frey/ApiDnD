'use strict';

const faker = require('faker');

const dungeonDescriptions = require('../../lib/descriptions');
const Account = require('../../models/account');
const Character = require('../../models/character');
const premadeClass = require('../../lib/premade-class');

const mockUse = module.exports = {};
mockUse.pUserMock = () => {
  const mock = {};
  mock.request = {
    username: faker.internet.userName(),
    password: faker.internet.password(),
    email: faker.internet.email(),
  };

  return Account.create(mock.request.username, mock.request.email, mock.request.password)
    .then((createdAccount) => {
      mock.account = createdAccount;
      return createdAccount.pCreateToken();
    })
    .then((token) => {
      mock.token = token;
      return mock;
    })
    .then(() => {
      return new Character({
        name: 'Betty',
        class: premadeClass.fighter,
        currentRoom: dungeonDescriptions.dungeonDescriptions[0],
        account: mock.account._id,
      }).save()
        .then((character) => {
          mock.account.character = character;
          mock.account.save();
          return mock;
        });
    });
};

mockUse.pUserCleanMock = () => {
  return Character.remove({})
    .then(() => {
      return Account.remove({});
    });
};
