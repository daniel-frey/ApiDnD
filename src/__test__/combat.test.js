'use strict';

const diceSet = require('../lib/diceset');
const charMock = require('./lib/character-mock');
const combat = require('../lib/combat');
const Creature = require('../models/creature');
const Dice = require('../lib/dice');
const server = require('../lib/server');

describe('combat test', () => {
  beforeAll(server.start);
  afterAll(server.stop);
  beforeEach(charMock.pCleanCategoryMocks);
  afterEach(charMock.pCleanCategoryMocks);


  test('combat between player and a random monster', () => {
    const kobold = new Creature({
      str: 7,
      int: 8,
      dex: 15,
      con: 9,
      wis: 7,
      cha: 8,
    },
    0.125,
    'kobold',
    new Dice(4),
    diceSet.d6.roll(2),
    8);
    return charMock.pCreateCharacterMock()
      .then((mock) => {
        expect(combat(mock, kobold)).toEqual('big meme');
      });
  });
});
