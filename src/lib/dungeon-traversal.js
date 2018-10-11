'use strict';

const dungeonDescriptions = require('./descriptions');
const roomsByName = require('./rooms');
const logger = require('./logger');

const dungeonMover = module.exports = {};

dungeonMover.dungeonTraversal = (roomAlias, charObj) => {
  charObj.currentRoom = dungeonDescriptions.dungeonDescriptions[
    roomsByName.roomList.indexOf(roomAlias)
  ];
  logger.log(logger.INFO, charObj.currentRoom);
  return charObj.currentRoom.description;
};
