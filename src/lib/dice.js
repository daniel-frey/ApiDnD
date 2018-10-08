'use strict';

module.exports = class Dice {
  constructor(sides) {
    this.sides = sides;
  }

  roll(times = 1) {
    let total = 0;
    for (let i = 0; i < times; i++) {
      total += Math.floor(Math.random() * this.sides) + 1;
    }
    return total;
  }
};
