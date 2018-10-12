'use strict';

const logger = require('./logger-middleware');

const potion = module.exports = {};

potion.health = (charObj) => {
  charObj.class.hp = charObj.class.maxHp;
  logger.log(logger.INFO, `Your health is now ${charObj.class.hp}`);
};

potion.usePotion = (charObj) => {
  if (charObj.class.hp <= charObj.class.maxHP / 2) {
    potion.health(charObj);
  }
};
