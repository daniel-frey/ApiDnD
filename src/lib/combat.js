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
  const hitVal = hitRoll(higherMod());
  logger.log(logger.INFO, `${attacker.class.name} rolls ${hitVal}.`)
  if (hitVal > attacker.target.class.ac) {
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

// what do we need in order to test this?
// player mock.
// player mock requires account mock.
// we also need to generate a creature.
// now, we need to put creature and player object in combat and let the logs tell us what.
// combat(playerMock, creatureMock)
// logs should look something like:
// round 1
// player rolls 15.
// player deals 5 damage to goblin.
// goblin rolls 10.
// round 2
// player rolls 16.
// player deals 8 damage to goblin.
// player wins.
