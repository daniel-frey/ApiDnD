'use strict';

const Creature = require('../models/creature');
const encounters = require('./encounters');
const logger = require('./logger');

module.exports = class RandomEncounter {
  constructor(challengeRating) {
    const filteredList = encounters.creatureDescriptions.filter((value) => {
      return value.challenge_rating === challengeRating;
    });
    logger.log(logger.INFO, 'filteredList', filteredList);
    const chosenCreature = filteredList[Math.floor(Math.random() * filteredList.length)];
    logger.log(logger.INFO, 'chosenIdx', chosenCreature);
    this.creature = new Creature({
      str: chosenCreature.strength,
      int: chosenCreature.intelligence,
      dex: chosenCreature.dexterity,
      con: chosenCreature.constitution,
      wis: chosenCreature.wisdom,
      cha: chosenCreature.charisma,
    }, challengeRating, 
    chosenCreature.name, 
    chosenCreature.actions[0], 
    chosenCreature.hit_points, 
    chosenCreature.armor_class);
  }
};
