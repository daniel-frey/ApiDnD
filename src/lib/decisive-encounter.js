'use strict';

const Creature = require('../models/creature');

module.exports = class Encounter {
  constructor(abilities, dc, name, attacks, hp, ac) {
    this.creature = new Creature(abilities, dc, name, attacks, hp, ac);
  }
};
