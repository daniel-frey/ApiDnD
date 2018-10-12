'use strict';

const dice = require('./diceset');

const traps = module.exports = {};

traps.checkRoom = (charObj) => {
  const rolled = dice.d20.roll();
  const charMod = charObj.class.absMod.wis + rolled;
  const currentTrapDC = charObj.currentRoom.traps.saveDC;
  if (!charObj.currentRoom.traps) {
    return 'The room is safe';
  }
  if (charMod < currentTrapDC) {
    return 'You are unable to locate any traps, but you feel you should still proceed with caution.';
  }
  return traps.disableTrap(charObj);
};

traps.disableTrap = (charObj) => {
  const rolled = dice.d20.roll();
  const charMod = charObj.class.absMod.wis + rolled;
  const currentTrap = charObj.currentRoom.traps;
  const currentTrapDC = currentTrap.saveDC;
  if (charMod < currentTrapDC) {
    charObj.class.hp -= 2;
    return `You fail to make a saving throw on disarming the ${currentTrap.description} trap. You are hit for 2 damage. Your health is currently ${charObj.class.hp}`;
  }
  return `You successfully disarm the ${currentTrap.description} trap. Whew, that was a close one.`;
};
