'use strict';

module.exports = class Creature {
  constructor(abilities, dc, name, attacks, hp, ac) {
    this.abs = abilities;
    this.dc = dc;
    this.name = name;
    this.ac = ac;
    this.attacks = attacks;
    this.absMod = {
      str: Math.floor((abilities.str - 10) / 2),
      int: Math.floor((abilities.int - 10) / 2),
      dex: Math.floor((abilities.dex - 10) / 2),
      con: Math.floor((abilities.con - 10) / 2),
      wis: Math.floor((abilities.wis - 10) / 2),
      cha: Math.floor((abilities.cha - 10) / 2),
    };
    this.hp = hp;
    this.target = null;
  }
};
