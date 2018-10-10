'use strict';

const Creature = require('../models/creature');

module.exports = class Encounter {
  constructor(challengeRating) {
    // pull random monster from db
    this.creature = new Creature({}, challengeRating, '', '', '', '');
    // tbc. we need to take the information from the random db in an asynchronous action, and then create a creature for the encounter. 
    // ex new Creature({monster.str, dex, int, con, wis, cha}, challengeRating, monster.name, monster.hp, monster.ac)
  }
};
