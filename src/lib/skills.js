'use strict';

const logger = require('./logger');
const attacker = require('./combat');
const Character = require('../models/character');
const die = require('./diceset');

let initRoll = require('./combat');

const MAX_SPELL_LEVEL = 9;

let secondAttackDamage = 0;
let sneakAttackDamage = 0;
let magicMissleDamage = 0;
let startingGold = 0;
let charSpellLevel = 1;

// Calculates the spell level for the character by using their overall level -W
module.exports = function calcSpellLevel() {
  if (Character.class.level % 3 === 0 && charSpellLevel <= MAX_SPELL_LEVEL) {
    charSpellLevel = Character.class.level - 1;
  }
};
// Skills to be used by different classes with scaling properties! -W
// Rogue skills
module.exports = function sneakAttack() {
  if (Character.class.name === 'Rogue' && initRoll === true) {
    sneakAttackDamage = attacker.class.weapon.die.d6.roll();
    logger.log(logger.INFO, `${Character.class.name} does ${sneakAttackDamage} damage with sneak attack!`);
  }
  if (Character.class.name === 'Rogue' && charSpellLevel >= 3 && charSpellLevel < 5) {
    sneakAttackDamage = attacker.class.weapon.die.d6.roll(2);
    logger.log(logger.INFO, `${Character.class.name} does ${sneakAttackDamage} damage with sneak attack!`);
  }
  if (Character.class.name === 'Rogue' && charSpellLevel >= 5 && charSpellLevel < 7) {
    sneakAttackDamage = attacker.class.weapon.die.d6.roll(3);
    logger.log(logger.INFO, `${Character.class.name} does ${sneakAttackDamage} damage with sneak attack!`);
  }
  if (Character.class.name === 'Rogue' && charSpellLevel >= 7 && charSpellLevel < MAX_SPELL_LEVEL) {
    initRoll = true;
    sneakAttackDamage = attacker.class.weapon.die.d6.roll(4);
    logger.log(logger.INFO, `${Character.class.name} does ${sneakAttackDamage} damage with sneak attack!`);
  }
  if (Character.class.name === 'Rogue' && charSpellLevel === MAX_SPELL_LEVEL) {
    initRoll = true;
    sneakAttackDamage = attacker.class.weapon.die.d6.roll(5);
    logger.log(logger.INFO, `${Character.class.name} does ${sneakAttackDamage} damage with sneak attack!`);
  }
};
// Fighter skills
module.exports = function secondAttack() {
  if (Character.class.name === 'Fighter' && Character.class.level >= 5) {
    secondAttackDamage = attacker.class.weapon.die.d20.roll(2); 
  }
  logger.log(logger.INFO, `${Character.class.name} does ${secondAttackDamage} total damage with main and second attacks!`);
};

module.exports = function improvedCrit(roll) {
  if (Character.class.name === 'Fighter' && Character.class.level >= 10) {
    if (roll === 20 || 19) {
      return true;
    }
    return false;
  }
  return false;
};

// Wizard Skills
module.exports = function magicMissle() {
  if (Character.class.name === 'Wizard') {
    magicMissleDamage = (die.d4.roll(charSpellLevel));
    logger.log(logger.INFO, `${Character.class.name} does ${magicMissleDamage} damage with magic missile!`);
  }
};
// Starting gold calculators! -W
module.exports = function rogueStartGold() {
  if (Character.class.name === 'Rogue') {
    startingGold = (die.d4.roll(4)) * 10;
  }
  logger.log(logger.INFO, `${Character.class.name} is starting with ${startingGold} gold.`);
};
module.exports = function fighterStartGold() {
  if (Character.class.name === 'Fighter') {
    startingGold = (die.d4.roll(5)) * 10;
  }
  logger.log(logger.INFO, `${Character.class.name} is starting with ${startingGold} gold.`);
};
module.exports = function wizardStartGold() {
  if (Character.class.name === 'Wizard') {
    startingGold = (die.d4.roll(4)) * 10;
  }
  logger.log(logger.INFO, `${Character.class.name} is starting with ${startingGold} gold.`);
};
