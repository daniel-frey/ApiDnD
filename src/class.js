'use strict';

const charClass = module.exports = {};

charClass.fighter = {
  name: 'fighter',
  level: 1,
  hp: 10,
  abs: {
    str: 15,
    int: 12,
    dex: 13,
    con: 14,
    wis: 10,
    cha: 8,
  },
  mod: {
    str: Math.floor((charClass.fighter.abs.str - 10) / 2),
    int: Math.floor((charClass.fighter.abs.int - 10) / 2),
    dex: Math.floor((charClass.fighter.abs.dex - 10) / 2),
    con: Math.floor((charClass.fighter.abs.con - 10) / 2),
    wis: Math.floor((charClass.fighter.abs.wis - 10) / 2),
    cha: Math.floor((charClass.fighter.abs.cha - 10) / 2),
  },
  weapon: '2H Sword',
  ac: 13,
};
