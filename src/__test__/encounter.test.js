'use strict';

const Encounter = require('../lib/encounter');

describe('encounter.js', () => {
  test('random monster pull (pulls cultist)', () => {
    const enc = new Encounter(0.125);
    expect(enc.creature.name).toEqual('Cultist');
  });
  test('pulls a random monster of difficulty 0', () => {
    const enc = new Encounter(0);
    expect(enc.creature.dc).toEqual(0);
  });
});
