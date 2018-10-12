'use strict';

const CharClass = require('../models/class');
const diceset = require('../lib/diceset');

const premades = module.exports = {};

premades.fighter = new CharClass({
  str: 18,
  dex: 17,
  int: 10,
  con: 10,
  wis: 10,
  cha: 8,
},
'Fighter', 10, '2H Sword', diceset.d10, 13);

premades.rogue = new CharClass({
  str: 12,
  dex: 17,
  int: 12,
  con: 10,
  wis: 10,
  cha: 12,
},
'Rogue', 10, 'Longsword', diceset.d6, 10);

premades.wizard = new CharClass({
  str: 7,
  dex: 10,
  int: 18,
  con: 10,
  wis: 15,
  cha: 13,
},
'Wizard', 6, 'Quarterstaff', diceset.d6, 10);

console.log(premades.fighter);
console.log(premades.rogue);
console.log(premades.wizard);
