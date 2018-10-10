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
    playerDeath();
    return true;
  }
  if (enemy.hp <= 0) {
    lootPhase();
    return true;
  }
  return false;
}

function hitRoll(bonus = 0) {
  const initialDie = die.d20.roll(); 
  if (initialDie === 20) {
    return 'crit';
  }
  return initialDie + bonus;
}

function attackPlayer(attacker) {
  const hitVal = hitRoll(higherMod(attacker.class.absMod));
  logger.log(logger.INFO, `${attacker.class.name} rolls ${hitVal}.`);
  if (hitVal > attacker.class.target.ac) {
    const damage = attacker.class.weapon.roll();
    logger.log(logger.INFO, `${attacker.class.name} deals ${damage} damage to ${attacker.class.target.name}`);
    attacker.class.target.hp -= damage;
    logger.log(logger.INFO, `${attacker.class.target.name}'s hp is now ${attacker.class.target.hp}`);
  } else if (hitVal === 'crit') {
    const criticalHit = attacker.class.weapon.roll(2);
    logger.log(logger.INFO, `Critical Hit! ${attacker.class.name} deals ${criticalHit} damage to ${attacker.class.target.name}`);
    attacker.class.target.hp -= criticalHit;
    logger.log(logger.INFO, `${attacker.class.target.name}'s hp is now ${attacker.class.target.hp}`);
  }
}

function attackEnemy(enemy) {
  const hitVal = hitRoll(higherMod(enemy.absMod));
  logger.log(logger.INFO, `${enemy.name} rolls ${hitVal}.`);
  if (hitVal > enemy.target.class.ac) {
    const damage = enemy.attacks.roll();
    logger.log(logger.INFO, `${enemy.name} deals ${damage} damage to ${enemy.target.class.name}`);
    enemy.target.class.hp -= damage;
    logger.log(logger.INFO, `${enemy.target.class.name}'s hp is now ${enemy.target.class.hp}`);
  } else if (hitVal === 'crit') {
    const criticalHitEnemy = enemy.attacks.roll(2);
    logger.log(logger.INFO, `Critical Hit! ${enemy.name} deals ${criticalHitEnemy} damage to ${enemy.target.class.name}`);
    enemy.target.class.hp -= criticalHitEnemy;
    logger.log(logger.INFO, `${enemy.target.class.name}'s hp is now ${enemy.target.class.hp}`);
  }
}


module.exports = function combat(player, enemy) {
  function initRoll(stand, adversary) {
    const standInit = hitRoll(stand.class.absMod.dex);
    logger.log(logger.INFO, `${stand.class.name} rolls ${standInit} for initiative.`);
    const adversaryInit = hitRoll(adversary.absMod.dex);
    logger.log(logger.INFO, `${adversary.name} rolls ${adversaryInit} for initiative.`);
    if (standInit >= adversaryInit) {
      logger.log(logger.INFO, `${stand.class.name} wins initiative.`);
      return true;
    }
    logger.log(logger.INFO, `${adversary.name} wins initiative.`);
    return false;
  }
  function combatInit(char, opp) {
    if (initRoll(char, opp)) {
      // first round actions go here when we code them.
      attackPlayer(char);
    } else {
      attackEnemy(opp);
    }
  }
  let rounds = 1;
  player.class.target = enemy;
  enemy.target = player;
  combatInit(player, enemy);
  while (!isDead(player, enemy)) {
    logger.log(logger.INFO, `round ${rounds}`);
    attackPlayer(player);
    if (isDead(player, enemy)) {
      break;
    }
    attackEnemy(enemy);
    rounds += 1;
  }
  return 'big meme';
};


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
