'use strict';

module.exports = class charClass {
  constructor(abilities, name, hp, weapon, ac) {
    this.abs = abilities;
    this.name = name;
    this.level = 1;
    this.hp = hp;
    this.weapon = weapon;
    this.ac = ac;
    this.absMod = {
      str: Math.floor((abilities.str - 10) / 2),
      int: Math.floor((abilities.int - 10) / 2),
      dex: Math.floor((abilities.dex - 10) / 2),
      con: Math.floor((abilities.con - 10) / 2),
      wiz: Math.floor((abilities.wiz - 10) / 2),
      cha: Math.floor((abilities.cha - 10) / 2),
    };
  }
};
