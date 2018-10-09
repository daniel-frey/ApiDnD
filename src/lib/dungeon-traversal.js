'use strict';

// const dungeon = require('descriptions');

const dungeonMover = module.exports = {};

dungeonMover.dungeonTraversal = (rms, rmsNames, playDirection, charObj) => {
  charObj.currentRoom = rms[rmsNames.indexOf(playDirection)];
  return charObj.currentRoom.description;
};
