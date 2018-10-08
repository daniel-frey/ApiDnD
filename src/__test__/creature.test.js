'use strict';

const Creature = require('../models/creature');
const Dice = require('../lib/dice');
const diceSet = require('../lib/diceset');


describe('can create a creature that exists in dnd.', () => {
  test('creates kobold.', () => {
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
    diceSet.d6.roll(2));
    expect(kobold.name).toEqual('kobold');
    expect(kobold.abs.str).toEqual(7);
    expect(kobold.absMod.str).toEqual(-2);
    expect(kobold.hp).toBeLessThanOrEqual(12);
  });
});
