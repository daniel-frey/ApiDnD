'use strict';

module.exports = class Creature {
  constructor(abilities, dc, name, attacks, hp) {
    this.abs = abilities;
    this.dc = dc;
    this.name = name;
    this.attacks = attacks;
    this.absMod = function () {
      this.absMod.str = (abilities.str - 10) / 2;
      this.absMod.int = (abilities.int - 10) / 2;
      this.absMod.dex = (abilities.dex - 10) / 2;
      this.absMod.con = (abilities.con - 10) / 2;
      this.absMod.wiz = (abilities.wiz - 10) / 2;
      this.absMod.cha = (abilities.cha - 10) / 2;
    };
    this.hp = hp;
  }
};
