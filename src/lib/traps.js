'use strict';

const dice = require('./diceset');

const traps = module.exports = {};

traps.checkRoom = (charObj) => {
  if (charObj.currentRoom.traps === {}) {
    return 'The room is safe';
  }
  traps.disableTrap(charObj);
  // traps.checkForPassages(charObj);
  return undefined;
};

traps.disableTrap = (charObj, stat) => {
  const rolled = dice.d20.roll;
  const charMod = charObj.class.absMod[stat] + rolled;
  const currentTrap = charObj.currentRoom.traps.saveDC;
  if (charMod < currentTrap) {
    charObj.hp -= 2;
  }
};

// traps.checkForPassages = (charObj) => {
//   if (charObj.currentRoom.secretPassages === {}) {
//     return 'There are no secret passages';
//   }
//
// };
