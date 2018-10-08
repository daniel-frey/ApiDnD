'use strict';

const dice = require('../lib/diceset');

describe('dice.js', () => {
  test('dice roll d2', () => {
    expect(dice.d2.roll()).toBeLessThanOrEqual(2);
  });
  test('dice roll d4', () => {
    expect(dice.d4.roll()).toBeLessThanOrEqual(4);
  });
  test('dice roll d6', () => {
    expect(dice.d6.roll()).toBeLessThanOrEqual(6);
  });
  test('dice roll d8', () => {
    expect(dice.d8.roll()).toBeLessThanOrEqual(8);
  });
  test('dice roll d10', () => {
    expect(dice.d10.roll()).toBeLessThanOrEqual(10);
  });
  test('dice roll d12', () => {
    expect(dice.d12.roll()).toBeLessThanOrEqual(12);
  });
  test('dice roll d20', () => {
    expect(dice.d20.roll()).toBeLessThanOrEqual(20);
  });
  test('dice roll d100', () => {
    expect(dice.d100.roll()).toBeLessThanOrEqual(100);
  });
});
