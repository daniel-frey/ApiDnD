'use strict';

const CharClass = require('../models/class');
const Dice = require('../lib/dice');

const fighter = new CharClass({
  str: 18,
  dex: 17,
  int: 10,
  con: 10,
  wis: 10,
  cha: 8,
},
'Fighter', 10, '2H Sword', new Dice(10), 13);

const rogue = new CharClass({
  str: 12,
  dex: 17,
  int: 12,
  con: 10,
  wis: 10,
  cha: 12,
},
'Rogue', 10, 'Longsword', new Dice(6), 10);

const wizard = new CharClass({
  str: 7,
  dex: 10,
  int: 18,
  con: 10,
  wis: 15,
  cha: 13,
},
'Wizard', 6, 'Quarterstaff', new Dice(6), 10);

console.log(fighter);
console.log(rogue);
console.log(wizard);
