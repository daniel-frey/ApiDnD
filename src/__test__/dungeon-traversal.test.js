'use strict';

const dungeonMover = require('../lib/dungeon-traversal');

const testDungeon = [
  {
    description: 'this is the opening room',
    connectedRooms: ['right room', 'hidden entry'],
    roomName: 'entry',
  },
  {
    description: 'this is room to the right',
    connectedRooms: ['entry', 'hidden entry'],
    roomName: 'right room',
  },
  {
    description: 'this is the hidden entry',
    connectedRooms: ['entry', 'right room'],
    roomName: 'hidden entry',
  },
];

const testDungeonByName = ['entry', 'right room', 'hidden entry']

describe('dungeon-traversal.js', () => {

  test('expect current room to update to playDirection input', () => {
    const char = {
      currentRoom: testDungeon[0],
    };
    dungeonMover.dungeonTraversal(testDungeon, testDungeonByName, 'hidden entry', char);
    expect(char.currentRoom.roomName).toEqual('hidden entry');
  });

  test('expect current room to update to playDirection input after function runs twice', () => {
    const char = {
      currentRoom: testDungeon[0],
    };
    dungeonMover.dungeonTraversal(testDungeon, testDungeonByName, 'hidden entry', char);
    dungeonMover.dungeonTraversal(testDungeon, testDungeonByName, 'right room', char);
    expect(char.currentRoom.roomName).toEqual('right room');
  });
});
