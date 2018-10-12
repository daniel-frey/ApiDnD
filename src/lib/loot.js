'use strict';

const dice = require('./diceset');

const lootOptions = module.exports = {};


lootOptions.items = (charObj, enemy) => {
  const enemyCR = enemy.challenge_rating;
  if (enemyCR >= 0.25 && enemyCR <= 4) {
    charObj.class.inventory[0] += dice.d4.roll(2);
  }
  if (enemyCR > 4) {
    charObj.class.inventory[0] += dice.d6.roll(3);
    charObj.class.inventory[1] += 1;
  }
  return charObj.class.inventory;
};
