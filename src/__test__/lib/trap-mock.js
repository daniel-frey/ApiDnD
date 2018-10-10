'use strict';

const devTraps = module.exports = {};

devTraps.checkRoom = (charObj, trapDC, roll, desc, traps) => {
  if (traps === false) {
    return 'The room is safe';
  }
  if (roll < trapDC) {
    return 'You are unable to locate any traps, but you feel you should still proceed with caution.';
  }
  return devTraps.disableTrap(charObj, trapDC, roll, desc);
};

devTraps.disableTrap = (charObj, trapDC, roll, desc) => {
  if (roll < trapDC) {
    charObj.class.hp -= 2;
    return `You fail to make a saving throw on disarming the ${trapDC[desc]} trap. You are hit for 2 damage. Your health is currently ${charObj.class.hp}`;
  }
  return `You successfully disarm the ${trapDC[desc]} trap. Whew, that was a close one.`;
};
