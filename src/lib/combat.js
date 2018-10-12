'use strict';

/**
 * @function combat()
 * makes the player and enemy targets of each other and engages them in synchronous combat.
 * the combat takes place over rounds until someone dies or runs. 
 * calls attackPlayer and attackEnemy back and forth, basically, until a victory/defeat
 * condition is reached. 
 * @param {object} player - the player character, as a property of the character schema.
 * @param {object} enemy - the enemy creature, as a property of the creature class.
 * @callback initRoll() - rolls for initiative. decides who goes first.
 * @callback combatInit() - calls @callback initRoll() and runs attack functions for winner.
 * @callback lootPhase() - directs player into explore state and gives player items in inventory.
 * @callback playerDeath() - kills the player off and deletes their character from db.
 * @callback higherMod() - in the event of an attack, uses the higher mod between dex or str.
 * @callback isDead() - state-checking function that analyzes if someone in the fight dies.
 * @callback hitRoll(bonus) - rolls for hit in a dnd 5th edition fashion.
 * @callback attackPlayer(attacker) - simulates an attack from the player-side.
 * @callback attackEnemy(enemy) - simulates an attack from enemy-side.
 */

const die = require('./diceset');

let returnValue = [];

function diceRoll(objWSides, times = 1) {
  let total = 0;
  for (let i = 0; i < times; i++) {
    total += Math.floor(Math.random() * objWSides.sides) + 1;
  }
  return total;
}

function higherMod(absModObj) {
  if (absModObj.str <= absModObj.dex) {
    return absModObj.dex;
  }
  return absModObj.str;
}

function isDead(player, enemy) {
  if (player.class.hp <= 0) {
    returnValue.push(`~${player.name} has died.~`);
    return true;
  }
  if (enemy.hp <= 0) {
    returnValue.push(`~${enemy.name} has died.~`);
    returnValue.push('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
    returnValue.push('~Victory!~');

    return true;
  }
  return false;
}

function hitRoll(bonus = 0) {
  const initialDie = die.d20.roll() + 1;
  if (initialDie === 20) {
    return 'crit';
  }
  return initialDie + bonus;
}

function attackPlayer(attacker) {
  const hitVal = hitRoll(higherMod(attacker.class.absMod));
  returnValue.push(`${attacker.class.name} rolls ${hitVal}.`);
  if (hitVal > attacker.class.target.ac) {
    const damage = diceRoll(attacker.class.weapon) + higherMod(attacker.class.absMod);
    attacker.class.target.hp -= damage;
    returnValue.push(`${attacker.class.target.name}'s hp is now ${attacker.class.target.hp}`);
  } else if (hitVal === 'crit') {
    const criticalHit = diceRoll(attacker.class.weapon, 2);
    returnValue.push(`Critical Hit! ${attacker.class.name} deals ${criticalHit} damage to ${attacker.class.target.name}`);
    attacker.class.target.hp -= criticalHit;
    returnValue.push(`${attacker.class.target.name}'s hp is now ${attacker.class.target.hp}`);
  }
}

function attackEnemy(enemy) {
  const hitVal = hitRoll(higherMod(enemy.absMod));
  returnValue.push(`${enemy.name} rolls ${hitVal}.`);
  if (hitVal > enemy.target.class.ac) {
    const damage = diceRoll(enemy.attacks);
    returnValue.push(`${enemy.name} deals ${damage} damage to ${enemy.target.class.name}`);
    enemy.target.class.hp -= damage;
    returnValue.push(`${enemy.target.class.name}'s hp is now ${enemy.target.class.hp}`);
  } else if (hitVal === 'crit') {
    const criticalHitEnemy = diceRoll(enemy.attacks, 2);
    returnValue.push(`Critical Hit! ${enemy.name} deals ${criticalHitEnemy} damage to ${enemy.target.class.name}`);
    enemy.target.class.hp -= criticalHitEnemy;
    returnValue.push(`${enemy.target.class.name}'s hp is now ${enemy.target.class.hp}`);
  }
}

module.exports = function combat(player, enemy) {
  returnValue = [];
  function initRoll() {
    const playerInit = hitRoll(player.class.absMod.dex);
    returnValue.push(`${player.class.name} rolls ${playerInit} for initiative.`);
    const enemyInit = hitRoll(enemy.absMod.dex);
    returnValue.push(`${enemy.name} rolls ${enemyInit} for initiative.`);
    if (playerInit >= enemyInit) {
      returnValue.push(`${player.class.name} wins initiative.`);
      return true;
    }
    returnValue.push(`${enemy.name} wins initiative.`);
    return false;
  }
  function combatInit() {
    if (initRoll(player, enemy)) {
      // first round actions go here when we code them.
      attackPlayer(player);
    } else {
      attackEnemy(enemy);
    }
  }
  let rounds = 1;
  player.class.target = enemy;
  enemy.target = player;
  combatInit(player, enemy);
  while (!isDead(player, enemy)) {
    returnValue.push(`~Round ${rounds}~`);
    attackPlayer(player);
    if (isDead(player, enemy)) {
      break;
    }
    attackEnemy(enemy);
    rounds += 1;
  }
  return returnValue;
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
