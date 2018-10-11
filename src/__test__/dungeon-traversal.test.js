'use strict';

const dungeonMover = require('../lib/dungeon-traversal');
const dungeonDescriptions = require('../lib/descriptions');

describe('dungeon-traversal.js', () => {
  test('expect current room to update to playDirection input', () => {
    const char = {
      currentRoom: dungeonDescriptions.dungeonDescriptions[0],
    };
    dungeonMover.dungeonTraversal('Archway', char);
    expect(char.currentRoom.roomName).toEqual('The Arch of Mist');
  });

  test('expect current room to update to playDirection input after function runs twice', () => {
    const char = {
      currentRoom: dungeonDescriptions.dungeonDescriptions[0],
    };
    dungeonMover.dungeonTraversal('Archway', char);
    dungeonMover.dungeonTraversal('Face', char);
    expect(char.currentRoom.roomName).toEqual('The Face of the Great Green Devil');
  });
});
