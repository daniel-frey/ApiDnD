'use strict';

const Account = require('./account-mock');
const Class = require('../../models/class');
const Character = require('../../models/character');
const dungeonDescriptions = require('../../lib/descriptions');
const Dice = require('../../lib/dice');
const logger = require('../../lib/logger');


const abilities = {
  str: 18,
  dex: 17,
  int: 10,
  con: 10,
  wis: 10,
  cha: 8,
};

const mockClass = new Class(abilities, 'Fighter', 10, '2h Sword', new Dice(10), 13);
const mockRoom = dungeonDescriptions.dungeonDescriptions;

const characterMock = module.exports = {};

characterMock.pCreateCharacterMock = () => {
  return Account.pCreateMock()
    .then((acc) => {
      logger.log(logger.INFO, acc);
      return new Character({
        name: 'Betty',
        class: mockClass,
        currentRoom: mockRoom[0],
        account: acc.account._id,
      }).save();
    });
};

characterMock.pCleanCategoryMocks = () => {
  return Character.remove({});
};
