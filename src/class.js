'use strict';

module.exports = class charClass {
  constructor(abilities, name, hp, weapon, ac) {
    this.abs = abilities;
    this.name = name;
    this.level = 1;
    this.hp = hp;
    this.weapon = weapon;
    this.ac = ac;
    this.absMod = function () {
      this.absMod.str = (abilities.str - 10) / 2;
      this.absMod.int = (abilities.int - 10) / 2;
      this.absMod.dex = (abilities.dex - 10) / 2;
      this.absMod.con = (abilities.con - 10) / 2;
      this.absMod.wiz = (abilities.wiz - 10) / 2;
      this.absMod.cha = (abilities.cha - 10) / 2;
    };
  }
};
