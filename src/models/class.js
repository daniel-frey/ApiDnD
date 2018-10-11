'use strict';

module.exports = class CharClass {
  constructor(abilities, name, hp, weaponName, weapon, ac) {
    this.name = name;
    this.level = 1;
    this.hp = hp;
    this.weaponName = weaponName;
    this.skills = null;
    this.spellLevel = null;
    this.weapon = weapon;
    this.abs = abilities;
    this.absMod = {
      str: Math.floor((abilities.str - 10) / 2),
      int: Math.floor((abilities.int - 10) / 2),
      dex: Math.floor((abilities.dex - 10) / 2),
      con: Math.floor((abilities.con - 10) / 2),
      wis: Math.floor((abilities.wis - 10) / 2),
      cha: Math.floor((abilities.cha - 10) / 2),
    };
    this.ac = ac + this.absMod.dex;
    this.combat = false;
    this.target = null;
    this.inventory = [];
  }
};
