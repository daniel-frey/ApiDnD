'use strict';

const logger = require('./logger');
const die = require('./diceset');

function lootPhase() {
  logger.log(logger.INFO, 'player wins');
}
function playerDeath() {
  logger.log(logger.INFO, 'player loses');
}


function isDead(player, enemy) {
  if (player.class.hp <= 0) {
    player.remove();
    return playerDeath();
  }
  if (enemy.class.hp <= 0) {
    return lootPhase();
  }
}

function hitRoll(bonus = 0) {
  return die.d20.roll() + bonus;
}

function attack(attacker) {
  if (hitRoll() > attacker.target.class.ac) {
    const damage = attacker.class.weapon.roll();
    logger.log(logger.INFO, `player deals ${damage} damage to ${attacker.target.class.name}`);
    attacker.target.class.hp -= damage;
  }
}


function combat(player, enemy) {
  while (!isDead(player, enemy)) {
    attack(player);
    isDead(player, enemy);
    attack(enemy);
  }
}
