'use strict';

const charMock = require('./lib/character-mock');
const accountMock = require('./lib/account-mock');
const trapsMock = require('./lib/trap-mock');
const server = require('../lib/server');

describe('traps test', () => {
  beforeAll(server.start);
  afterAll(server.stop);
  beforeEach(charMock.pCleanCategoryMocks);
  beforeEach(accountMock.pCleanAccountMocks);

  test('character fails to detect any traps', () => {
    charMock.pCreateCharacterMock()
      .then((mock) => {
        return trapsMock.checkRoom(mock, 15, 10, 'Poison dart', true);
      })
      .then((trapResult) => {
        expect(trapResult).toEqual('You are unable to locate any traps, but you feel you should still proceed with caution.');
      });
  });

  test('the room actually has no traps', () => {
    charMock.pCreateCharacterMock()
      .then((mock) => {
        return trapsMock.checkRoom(mock, 10, 15, 'Poison dart', false);
      })
      .then((trapResult) => {
        expect(trapResult).toEqual('The room is safe.');
      });
  });

  test('character hp drops -2 on failure to disarm', () => {
    let savedMock = null;
    charMock.pCreateCharacterMock()
      .then((mock) => {
        savedMock = mock;
        return trapsMock.disableTrap(mock, 15, 10, 'Poison dart', true);
      })
      .then((trapResult) => {
        expect(trapResult).toEqual('You fail to make a saving throw on disarming the Poison dart trap. You are hit for 2 damage. Your health is currently 8');
        expect(savedMock.hp).toEqual(8);
      });
  });

  test('character detects and disarms a trap successfully', () => {
    let savedMock = null;
    charMock.pCreateCharacterMock()
      .then((mock) => {
        savedMock = mock;
        return trapsMock.checkRoom(mock, 15, 10, 'Poison dart', true);
      })
      .then((trapResult) => {
        expect(trapResult).toEqual('You successfully disarm the Poison dart trap. Whew, that was a close one.');
        expect(savedMock.hp).toEqual(10);
      });
  });
});
