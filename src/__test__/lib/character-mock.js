'use strict';

const faker = require('faker');
const Account = require('./account-mock');
const Class = require('../../models/class');
const Character = require('../../models/character');

const abilities = {
  str: 18,
  dex: 17,
  int: 10,
  con: 10,
  wis: 10,
  cha: 8,
};

const mockClass = new Class(abilities, 'Betty', 10, '2h Sword', 13);

const characterMock = module.exports = {};

characterMock.pCreateCharacterMock = () => {
  return new Character({
    name: faker.lorem.words(1),
    class: mockClass,
    account: Account.pCreateMock(),
  }).save();
};

characterMock.pCleanCategoryMocks = () => {
  return Character.remove({});
};