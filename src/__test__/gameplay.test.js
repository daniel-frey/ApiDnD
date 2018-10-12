'use strict';

const charMock = require('./lib/character-mock');
const server = require('../lib/server');
const accountMock = require('./lib/account-mock');
const logger = require('../lib/logger');
const dungeonMover = require('../lib/dungeon-traversal');
const combat = require('../lib/combat');

describe('IT\'S TIME TO TEST THE VIDEO GAME', () => {
  beforeAll(server.start);
  afterAll(server.stop);
  beforeEach(charMock.pCleanCategoryMocks);
  beforeEach(accountMock.pCleanAccountMocks);
  test('MAKE THE CHARACTER, PLAY THE VIDEO GAME', () => {
    return charMock.pCreateCharacterMock()
      .then((betty) => {
        logger.log(logger.INFO, betty);
        logger.log(logger.INFO, betty.currentRoom);
        dungeonMover.dungeonTraversal('Fresco', betty);
        dungeonMover.dungeonTraversal('Gargoyle', betty);
        expect(betty.currentRoom.roomName).toEqual('Gargoyle Lair');
        logger.log(logger.INFO, betty.currentRoom.encounter);
        expect(typeof combat(betty, betty.currentRoom.encounter.creature)).toEqual('object');
      });
  });
});
