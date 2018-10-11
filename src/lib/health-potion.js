'use strict';

const potion = module.exports = {};

potion.health = (charObj) => {
  charObj.class.hp = charObj.class.maxHp;
};

potion.usePotion = (charObj) => {
  if (charObj.class.hp <= charObj.class.maxHP / 2) {
    potion.health(charObj);
  }
};
