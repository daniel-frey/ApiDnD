'use strict';

const dungeonMover = require('../lib/dungeon-traversal');

const dungeonDescriptions = require('../lib/descriptions');

describe('dungeon-traversal.js', () => {

  test('expect current room to update to playDirection input', () => {
    const char = {
      currentRoom: dungeonDescriptions.dungeonDescriptions[0],
    };
    dungeonMover.dungeonTraversal('The Arch of Mist', char);
    expect(char.currentRoom.roomName).toEqual('The Arch of Mist');
  });

  test('expect current room to update to playDirection input after function runs twice', () => {
    const char = {
      currentRoom: dungeonDescriptions.dungeonDescriptions[0],
    };
    dungeonMover.dungeonTraversal('The Arch of Mist', char);
    dungeonMover.dungeonTraversal('The Face of the Great Green Devil', char);
    expect(char.currentRoom.roomName).toEqual('The Face of the Great Green Devil');
  });
});
