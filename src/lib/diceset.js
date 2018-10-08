'use strict';

const Dice = require('./dice');

const diceSet = module.exports = {};

diceSet.d2 = new Dice(2);
diceSet.d4 = new Dice(4);
diceSet.d6 = new Dice(6);
diceSet.d8 = new Dice(8);
diceSet.d10 = new Dice(10);
diceSet.d12 = new Dice(12);
diceSet.d20 = new Dice(20);
diceSet.d100 = new Dice(100);
