'use strict';

const logger = require('./logger');
const die = require('./diceset');

function lootPhase() {
  logger.log(logger.INFO, 'player wins');
}
function playerDeath() {
  logger.log(logger.INFO, 'player loses');
}
function higherMod(absModObj) {
  if (absModObj.str <= absModObj.dex) {
    return absModObj.dex;
  }
  return absModObj.str;
}

function isDead(player, enemy) {
  if (player.class.hp <= 0) {
    player.remove();
    return playerDeath();
  }
  if (enemy.class.hp <= 0) {
    return lootPhase();
  }
  return false;
}

function hitRoll(bonus = 0) {
  return die.d20.roll() + bonus;
}

function attack(attacker) {
  if (hitRoll(higherMod()) > attacker.target.class.ac) {
    const damage = attacker.class.weapon.roll();
    logger.log(logger.INFO, `${attacker.class.name} deals ${damage} damage to ${attacker.target.class.name}`);
    attacker.target.class.hp -= damage;
  }
}


function combat(player, enemy) {
  let rounds = 1;
  while (!isDead(player, enemy)) {
    logger.log(logger.INFO, `round ${rounds}`);
    attack(player);
    isDead(player, enemy);
    attack(enemy);
    rounds += 1;
  }
}
