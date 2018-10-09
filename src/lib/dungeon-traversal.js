'use strict';

const dungeonDescriptions = require('./descriptions');
const roomsByName = require('./rooms');

const dungeonMover = module.exports = {};

dungeonMover.dungeonTraversal = (playDirection, charObj) => {
  charObj.currentRoom = dungeonDescriptions.dungeonDescriptions[
    roomsByName.roomList.indexOf(playDirection)
  ];
  return charObj.currentRoom.description;
};
