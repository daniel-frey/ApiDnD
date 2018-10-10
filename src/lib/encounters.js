'use strict';

const encounters = module.exports = {};


encounters.creatureDescriptions = [
  {
    name: 'Gnoll',
    armor_class: 15,
    hit_points: 22,
    hit_dice: '5d8',
    strength: 14,
    dexterity: 12,
    constitution: 11,
    intelligence: 6,
    wisdom: 10,
    charisma: 7,
    challenge_rating: 0.5,
    actions:
      [{
        damage_bonus: 2,
        damage_dice: '1d4',
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage.',
        name: 'Bite',
      },
      {
        damage_bonus: 2,
        damage_dice: '1d6',
        attack_bonus: 4,
        desc: 'Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 6 (1d8 + 2) piercing damage if used with two hands to make a melee attack.',
        name: 'Spear',
      },
      {
        damage_bonus: 1,
        damage_dice: '1d8',
        attack_bonus: 3,
        desc: 'Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.',
        name: 'Longbow',
      }],
  },
  {
    name: 'Animated Armor',
    armor_class: 18,
    hit_points: 33,
    hit_dice: '6d8',
    strength: 14,
    dexterity: 11,
    constitution: 13,
    intelligence: 1,
    wisdom: 3,
    charisma: 1,
    challenge_rating: 1,
    actions: [{
      attack_bonus: 0,
      desc: 'The armor makes two melee attacks.',
      name: 'Multiattack',
    },
    {
      damage_bonus: 2,
      damage_dice: '1d6',
      attack_bonus: 4,
      desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage.',
      name: 'Slam',
    }],
  },
  {
    name: 'Assassin',
    armor_class: 15,
    hit_points: 78,
    hit_dice: '12d8',
    strength: 11,
    dexterity: 16,
    constitution: 14,
    intelligence: 13,
    wisdom: 11,
    charisma: 10,
    challenge_rating: 8,
    actions: [
      {
        attack_bonus: 0,
        desc: 'The assassin makes two shortsword attacks.',
        name: 'Multiattack',
      },
      {
        damage_bonus: 3,
        damage_dice: '1d6',
        attack_bonus: 6,
        desc: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.',
        name: 'Shortsword',
      },
      {
        damage_bonus: 3,
        damage_dice: '1d8',
        attack_bonus: 6,
        desc: 'Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one.',
        name: 'Light Crossbow',
      }],
  },
  {
    name: 'Bandit Captain',
    armor_class: 15,
    hit_points: 65,
    hit_dice: '10d8',
    strength: 15,
    dexterity: 16,
    constitution: 14,
    intelligence: 14,
    wisdom: 11,
    charisma: 14,
    challenge_rating: 2,
    actions: [
      {
        attack_bonus: 0,
        desc: 'The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers.',
        name: 'Multiattack',
      },
      {
        damage_bonus: 3,
        damage_dice: '1d6',
        attack_bonus: 5,
        desc: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.',
        name: 'Scimitar',
      },
      {
        damage_bonus: 3,
        damage_dice: '1d4',
        attack_bonus: 5,
        desc: 'Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage.',
        name: 'Dagger',
      },
    ],
    reactions: [
      {
        attack_bonus: 0,
        desc: 'The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon.',
        name: 'Parry',
      },
    ],
  },
  {
    name: 'Bat',
    armor_class: 12,
    hit_points: 1,
    hit_dice: '1d4',
    strength: 2,
    dexterity: 15,
    constitution: 8,
    intelligence: 2,
    wisdom: 12,
    charisma: 4,
    challenge_rating: 0,
    actions: [
      {
        damage_bonus: 1,
        attack_bonus: 0,
        desc: 'Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.',
        name: 'Bite',
      },
    ],
  },
  {
    name: 'Blink Dog',
    armor_class: 13,
    hit_points: 22,
    hit_dice: '4d8',
    speed: '40 ft.',
    strength: 12,
    dexterity: 17,
    constitution: 12,
    intelligence: 10,
    wisdom: 13,
    charisma: 11,
    challenge_rating: 0.25,
    actions: [
      {
        damage_bonus: 1,
        damage_dice: '1d6',
        attack_bonus: 3,
        desc: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.',
        name: 'Bite',
      },
      {
        attack_bonus: 0,
        desc: 'The dog magically teleports, along with any equipment it is wearing or carrying, up to 40 ft. to an unoccupied space it can see. Before or after teleporting, the dog can make one bite attack.',
        name: 'Teleport (Recharge 4-6)',
      },
    ],
  },
  {
    name: 'Cloaker',
    armor_class: 14,
    hit_points: 78,
    hit_dice: '12d10',
    strength: 17,
    dexterity: 15,
    constitution: 12,
    intelligence: 13,
    wisdom: 12,
    charisma: 14,
    challenge_rating: 8,
    actions: [
      {
        attack_bonus: 0,
        desc: 'The cloaker makes two attacks: one with its bite and one with its tail.',
        name: 'Multiattack',
      },
      {
        damage_bonus: 3,
        damage_dice: '2d6',
        attack_bonus: 6,
        desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 10 (2d6 + 3) piercing damage, and if the target is Large or smaller, the cloaker attaches to it. If the cloaker has advantage against the target, the cloaker attaches to the target's head, and the target is blinded and unable to breathe while the cloaker is attached. While attached, the cloaker can make this attack only against the target and has advantage on the attack roll. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check.",
        name: 'Bite',
      },
      {
        damage_bonus: 3,
        damage_dice: '1d8',
        attack_bonus: 6,
        desc: 'Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 7 (1d8 + 3) slashing damage.',
        name: 'Tail',
      },
      {
        attack_bonus: 0,
        desc: "Each creature within 60 feet of the cloaker that can hear its moan and that isn't an aberration must succeed on a DC 13 Wisdom saving throw or become frightened until the end of the cloaker's next turn. If a creature's saving throw is successful, the creature is immune to the cloaker's moan for the next 24 hours.",
        name: 'Moan',
      },
      {
        attack_bonus: 0,
        desc: "The cloaker magically creates three illusory duplicates of itself if it isn't in bright light. The duplicates move with it and mimic its actions, shifting position so as to make it impossible to track which cloaker is the real one. If the cloaker is ever in an area of bright light, the duplicates disappear.\nWhenever any creature targets the cloaker with an attack or a harmful spell while a duplicate remains, that creature rolls randomly to determine whether it targets the cloaker or one of the duplicates. A creature is unaffected by this magical effect if it can't see or if it relies on senses other than sight.\nA duplicate has the cloaker's AC and uses its saving throws. If an attack hits a duplicate, or if a duplicate fails a saving throw against an effect that deals damage, the duplicate disappears.",
        name: 'Phantasms (Recharges after a Short or Long Rest)',
      },
    ],
  },
  {
    name: 'Cultist',
    armor_class: 12,
    hit_points: 9,
    hit_dice: '2d8',
    speed: '30 ft.',
    strength: 11,
    dexterity: 12,
    constitution: 10,
    intelligence: 10,
    wisdom: 11,
    charisma: 10,
    challenge_rating: 0.125,
    actions: [
      {
        damage_bonus: 1,
        damage_dice: '1d6',
        attack_bonus: 3,
        desc: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage.',
        name: 'Scimitar',
      },
    ],
  },
  {
    name: 'Death Dog',
    armor_class: 12,
    hit_points: 39,
    hit_dice: '6d8',
    speed: '40 ft.',
    strength: 15,
    dexterity: 14,
    constitution: 14,
    intelligence: 3,
    wisdom: 13,
    charisma: 6,
    challenge_rating: 1,
    actions: [
      {
        attack_bonus: 0,
        desc: 'The dog makes two bite attacks.',
        name: 'Multiattack',
      },
      {
        damage_bonus: 2,
        damage_dice: '1d6',
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw against disease or become poisoned until the disease is cured. Every 24 hours that elapse, the creature must repeat the saving throw, reducing its hit point maximum by 5 (1d10) on a failure. This reduction lasts until the disease is cured. The creature dies if the disease reduces its hit point maximum to 0.',
        name: 'Bite',
      },
    ],
  },
  {
    name: 'Drider',
    armor_class: 19,
    hit_points: 123,
    hit_dice: '13d10',
    strength: 16,
    dexterity: 16,
    constitution: 18,
    intelligence: 13,
    wisdom: 14,
    charisma: 12,
    challenge_rating: 6,
    actions: [
      {
        attack_bonus: 0,
        desc: 'The drider makes three attacks, either with its longsword or its longbow. It can replace one of those attacks with a bite attack.',
        name: 'Multiattack',
      },
      {
        damage_bonus: 2,
        damage_dice: '1d4',
        attack_bonus: 6,
        desc: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 2 (1d4) piercing damage plus 9 (2d8) poison damage.',
        name: 'Bite',
      },
      {
        damage_bonus: 3,
        damage_dice: '1d8',
        attack_bonus: 6,
        desc: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands.',
        name: 'Longsword',
      },
      {
        damage_bonus: 3,
        damage_dice: '1d8',
        attack_bonus: 6,
        desc: 'Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) poison damage.',
        name: 'Longbow',
      },
    ],
  },
  {
    name: 'Flying Sword',
    armor_class: 17,
    hit_points: 17,
    hit_dice: '5d6',
    strength: 12,
    dexterity: 15,
    constitution: 11,
    intelligence: 1,
    wisdom: 5,
    charisma: 1,
    challenge_rating: 0.25,
    actions: [
      {
        damage_bonus: 1,
        damage_dice: '1d8',
        attack_bonus: 3,
        desc: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage.',
        name: 'Longsword',
      },
    ],
  },
  {
    name: 'Gargoyle',
    armor_class: 15,
    hit_points: 52,
    hit_dice: '7d8',
    strength: 15,
    dexterity: 11,
    constitution: 16,
    intelligence: 6,
    wisdom: 11,
    charisma: 7,
    challenge_rating: 2,
    actions: [
      {
        attack_bonus: 0,
        desc: 'The gargoyle makes two attacks: one with its bite and one with its claws.',
        name: 'Multiattack',
      },
      {
        damage_bonus: 2,
        damage_dice: '1d6',
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
        name: 'Bite',
      },
      {
        damage_bonus: 2,
        damage_dice: '1d6',
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.',
        name: 'Claws',
      },
    ],
  },
  {
    name: 'Gelatinous Cube',
    armor_class: 6,
    hit_points: 84,
    hit_dice: '8d10',
    strength: 14,
    dexterity: 3,
    constitution: 20,
    intelligence: 1,
    wisdom: 6,
    charisma: 1,
    challenge_rating: 2,
    actions: [
      {
        damage_dice: '3d6',
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 10 (3d6) acid damage.',
        name: 'Pseudopod',
      },
      {
        attack_bonus: 0,
        desc: "The cube moves up to its speed. While doing so, it can enter Large or smaller creatures' spaces. Whenever the cube enters a creature's space, the creature must make a DC 12 Dexterity saving throw.\nOn a successful save, the creature can choose to be pushed 5 feet back or to the side of the cube. A creature that chooses not to be pushed suffers the consequences of a failed saving throw.\nOn a failed save, the cube enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 21 (6d6) acid damage at the start of each of the cube's turns. When the cube moves, the engulfed creature moves with it.\nAn engulfed creature can try to escape by taking an action to make a DC 12 Strength check. On a success, the creature escapes and enters a space of its choice within 5 feet of the cube.",
        name: 'Engulf',
      },
    ],
  },
  {
    name: 'Ghost',
    armor_class: 11,
    hit_points: 45,
    hit_dice: '10d8',
    strength: 7,
    dexterity: 13,
    constitution: 10,
    intelligence: 10,
    wisdom: 12,
    charisma: 17,
    challenge_rating: 4,
    actions: [
      {
        damage_bonus: 3,
        damage_dice: '4d6',
        attack_bonus: 5,
        desc: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 17 (4d6 + 3) necrotic damage.',
        name: 'Withering Touch',
      },
      {
        attack_bonus: 0,
        desc: "The ghost enters the Ethereal Plane from the Material Plane, or vice versa. It is visible on the Material Plane while it is in the Border Ethereal, and vice versa, yet it can't affect or be affected by anything on the other plane.",
        name: 'Etherealness',
      },
      {
        attack_bonus: 0,
        desc: "Each non-undead creature within 60 ft. of the ghost that can see it must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If the save fails by 5 or more, the target also ages 1d4 _ 10 years. A frightened target can repeat the saving throw at the end of each of its turns, ending the frightened condition on itself on a success. If a target's saving throw is successful or the effect ends for it, the target is immune to this ghost's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring.",
        name: 'Horrifying Visage',
      },
      {
        attack_bonus: 0,
        desc: "One humanoid that the ghost can see within 5 ft. of it must succeed on a DC 13 Charisma saving throw or be possessed by the ghost; the ghost then disappears, and the target is incapacitated and loses control of its body. The ghost now controls the body but doesn't deprive the target of awareness. The ghost can't be targeted by any attack, spell, or other effect, except ones that turn undead, and it retains its alignment, Intelligence, Wisdom, Charisma, and immunity to being charmed and frightened. It otherwise uses the possessed target's statistics, but doesn't gain access to the target's knowledge, class features, or proficiencies.\nThe possession lasts until the body drops to 0 hit points, the ghost ends it as a bonus action, or the ghost is turned or forced out by an effect like the dispel evil and good spell. When the possession ends, the ghost reappears in an unoccupied space within 5 ft. of the body. The target is immune to this ghost's Possession for 24 hours after succeeding on the saving throw or after the possession ends.",
        name: 'Possession (Recharge 6)',
      },
    ],
  },
  {
    name: 'Ghoul',
    armor_class: 12,
    hit_points: 22,
    hit_dice: '5d8',
    speed: '30 ft.',
    strength: 13,
    dexterity: 15,
    constitution: 10,
    intelligence: 7,
    wisdom: 10,
    charisma: 6,
    challenge_rating: 1,
    actions: [
      {
        damage_bonus: 2,
        damage_dice: '2d6',
        attack_bonus: 2,
        desc: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage.',
        name: 'Bite',
      },
      {
        attack_bonus: 0,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.',
        name: 'Claws',
      },
    ],
  },
  {
    name: 'Giant Wolf Spider',
    armor_class: 13,
    hit_points: 11,
    hit_dice: '2d8',
    strength: 12,
    dexterity: 16,
    constitution: 13,
    intelligence: 3,
    wisdom: 12,
    charisma: 4,
    challenge_rating: 0.25,
    actions: [
      {
        damage_bonus: 1,
        damage_dice: '1d6',
        attack_bonus: 3,
        desc: 'Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.',
        name: 'Bite',
      },
    ],
  },
  {
    name: 'Goblin',
    armor_class: 15,
    hit_points: 7,
    hit_dice: '2d6',
    speed: '30 ft.',
    strength: 8,
    dexterity: 14,
    constitution: 10,
    intelligence: 10,
    wisdom: 8,
    charisma: 8,
    challenge_rating: 0.25,
    actions: [
      {
        damage_bonus: 2,
        damage_dice: '1d6',
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage.',
        name: 'Scimitar',
      },
      {
        damage_bonus: 2,
        damage_dice: '1d6',
        attack_bonus: 4,
        desc: 'Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
        name: 'Shortbow',
      },
    ],
  },
  {
    name: 'Hell Hound',
    armor_class: 15,
    hit_points: 45,
    hit_dice: '7d8',
    speed: '50 ft.',
    strength: 17,
    dexterity: 12,
    constitution: 14,
    intelligence: 6,
    wisdom: 13,
    charisma: 6,
    challenge_rating: 3,
    actions: [
      {
        damage_bonus: 3,
        damage_dice: '1d8',
        attack_bonus: 5,
        desc: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 7 (2d6) fire damage.',
        name: 'Bite',
      },
      {
        damage_dice: '6d6',
        attack_bonus: 0,
        desc: 'The hound exhales fire in a 15-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.',
        name: 'Fire Breath (Recharge 5-6)',
      },
    ],
  },
  {
    name: 'Hobgoblin',
    armor_class: 18,
    hit_points: 11,
    hit_dice: '2d8',
    strength: 13,
    dexterity: 12,
    constitution: 12,
    intelligence: 10,
    wisdom: 10,
    charisma: 9,
    challenge_rating: 0.5,
    actions: [
      {
        damage_bonus: 1,
        damage_dice: '1d8',
        attack_bonus: 3,
        desc: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage, or 6 (1d10 + 1) slashing damage if used with two hands.',
        name: 'Longsword',
      },
      {
        damage_bonus: 1,
        damage_dice: '1d8',
        attack_bonus: 3,
        desc: 'Ranged Weapon Attack: +3 to hit, range 150/600 ft., one target. Hit: 5 (1d8 + 1) piercing damage.',
        name: 'Longbow',
      },
    ],
  },
  {
    name: 'Imp',
    armor_class: 13,
    hit_points: 10,
    hit_dice: '3d4',
    strength: 6,
    dexterity: 17,
    constitution: 13,
    intelligence: 11,
    wisdom: 12,
    charisma: 14,
    challenge_rating: 1,
    actions: [
      {
        damage_bonus: 3,
        damage_dice: '1d4',
        attack_bonus: 5,
        desc: 'Melee Weapon Attack: +5 to hit, reach 5 ft ., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make on a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.',
        name: 'Sting (Bite in Beast Form)',
      },
      {
        attack_bonus: 0,
        desc: 'The imp magically turns invisible until it attacks, or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it.',
        name: 'Invisibility',
      },
    ],
  },
  {
    name: 'Mimic',
    armor_class: 12,
    hit_points: 58,
    hit_dice: '9d8',
    strength: 17,
    dexterity: 12,
    constitution: 15,
    intelligence: 5,
    wisdom: 13,
    charisma: 8,
    challenge_rating: 2,
    actions: [
      {
        damage_bonus: 3,
        damage_dice: '1d8',
        attack_bonus: 5,
        desc: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the mimic is in object form, the target is subjected to its Adhesive trait.',
        name: 'Pseudopod',
      },
      {
        damage_bonus: 3,
        damage_dice: '1d8 + 1d8',
        attack_bonus: 5,
        desc: 'Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage plus 4 (1d8) acid damage.',
        name: 'Bite',
      },
    ],
  },
  {
    name: 'Mummy',
    armor_class: 11,
    hit_points: 58,
    hit_dice: '9d8',
    strength: 16,
    dexterity: 8,
    constitution: 15,
    intelligence: 6,
    wisdom: 10,
    charisma: 12,
    challenge_rating: 3,
    actions: [
      {
        attack_bonus: 0,
        desc: 'The mummy can use its Dreadful Glare and makes one attack with its rotting fist.',
        name: 'Multiattack',
      },
      {
        damage_bonus: 3,
        damage_dice: '2d6',
        attack_bonus: 5,
        desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage plus 10 (3d6) necrotic damage. If the target is a creature, it must succeed on a DC 12 Constitution saving throw or be cursed with mummy rot. The cursed target can't regain hit points, and its hit point maximum decreases by 10 (3d6) for every 24 hours that elapse. If the curse reduces the target's hit point maximum to 0, the target dies, and its body turns to dust. The curse lasts until removed by the remove curse spell or other magic.",
        name: 'Rotting Fist',
      },
      {
        attack_bonus: 0,
        desc: "The mummy targets one creature it can see within 60 ft. of it. If the target can see the mummy, it must succeed on a DC 11 Wisdom saving throw against this magic or become frightened until the end of the mummy's next turn. If the target fails the saving throw by 5 or more, it is also paralyzed for the same duration. A target that succeeds on the saving throw is immune to the Dreadful Glare of all mummies (but not mummy lords) for the next 24 hours.",
        name: 'Dreadful Glare',
      },
    ],
  },
  {
    name: 'Phase Spider',
    armor_class: 13,
    hit_points: 32,
    hit_dice: '5d10',
    strength: 15,
    dexterity: 15,
    constitution: 12,
    intelligence: 6,
    wisdom: 10,
    charisma: 6,
    challenge_rating: 3,
    actions: [
      {
        damage_bonus: 2,
        damage_dice: '1d10',
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.',
        name: 'Bite',
      },
    ],
  },
  {
    name: 'Raven',
    armor_class: 12,
    hit_points: 1,
    hit_dice: '1d4',
    strength: 2,
    dexterity: 14,
    constitution: 8,
    intelligence: 2,
    wisdom: 12,
    charisma: 6,
    challenge_rating: 0,
    actions: [
      {
        attack_bonus: 0,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage.',
        name: 'Beak',
      },
    ],
  },
  {
    name: 'Rug of Smothering',
    armor_class: 12,
    hit_points: 33,
    hit_dice: '6d10',
    strength: 17,
    dexterity: 14,
    constitution: 10,
    intelligence: 1,
    wisdom: 3,
    charisma: 1,
    challenge_rating: 2,
    actions: [
      {
        damage_bonus: 3,
        damage_dice: '2d6',
        attack_bonus: 0,
        desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one Medium or smaller creature. Hit: The creature is grappled (escape DC 13). Until this grapple ends, the target is restrained, blinded, and at risk of suffocating, and the rug can't smother another target. In addition, at the start of each of the target's turns, the target takes 10 (2d6 + 3) bludgeoning damage.",
        name: 'Smother',
      },
    ],
  },
  {
    name: 'Skeleton',
    armor_class: 13,
    hit_points: 13,
    hit_dice: '2d8',
    strength: 10,
    dexterity: 14,
    constitution: 15,
    intelligence: 6,
    wisdom: 8,
    charisma: 5,
    challenge_rating: 0.25,
    actions: [
      {
        damage_bonus: 2,
        damage_dice: '1d6',
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
        name: 'Shortsword',
      },
      {
        damage_bonus: 2,
        damage_dice: '1d6',
        attack_bonus: 4,
        desc: 'Ranged Weapon Attack: +4 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage.',
        name: 'Shortbow',
      },
    ],
  },
  {
    name: 'Spider',
    armor_class: 12,
    hit_points: 1,
    hit_dice: '1d4',
    strength: 2,
    dexterity: 14,
    constitution: 8,
    intelligence: 1,
    wisdom: 10,
    charisma: 2,
    challenge_rating: 0,
    actions: [
      {
        damage_bonus: 1,
        attack_bonus: 4,
        desc: 'Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.',
        name: 'Bite',
      },
    ],
  },
  {
    name: 'Swarm of Bats',
    armor_class: 12,
    hit_points: 22,
    hit_dice: '5d8',
    strength: 5,
    dexterity: 15,
    constitution: 10,
    intelligence: 2,
    wisdom: 12,
    charisma: 4,
    damage_vulnerabilities: '',
    challenge_rating: 0.25,
    actions: [
      {
        damage_dice: '2d4',
        attack_bonus: 4,
        desc: "Melee Weapon Attack: +4 to hit, reach 0 ft., one creature in the swarm's space. Hit: 5 (2d4) piercing damage, or 2 (1d4) piercing damage if the swarm has half of its hit points or fewer.",
        name: 'Bites',
      },
    ],
  },
  {
    name: 'Swarm of Spiders',
    armor_class: 12,
    hit_points: 22,
    hit_dice: '5d8',
    strength: 3,
    dexterity: 13,
    constitution: 10,
    intelligence: 1,
    wisdom: 7,
    charisma: 1,
    challenge_rating: 0.5,
    actions: [
      {
        damage_dice: '4d4',
        attack_bonus: 3,
        desc: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer.",
        name: 'Bites',
      },
    ],
  },
  {
    name: 'Wraith',
    armor_class: 13,
    hit_points: 67,
    hit_dice: '9d8',
    strength: 6,
    dexterity: 16,
    constitution: 16,
    intelligence: 12,
    wisdom: 14,
    charisma: 15,
    challenge_rating: 5,
    actions: [
      {
        damage_bonus: 3,
        damage_dice: '4d8',
        attack_bonus: 6,
        desc: 'Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 21 (4d8 + 3) necrotic damage. The target must succeed on a DC 14 Constitution saving throw or its hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until the target finishes a long rest. The target dies if this effect reduces its hit point maximum to 0.',
        name: 'Life Drain',
      },
      {
        attack_bonus: 0,
        desc: "The wraith targets a humanoid within 10 feet of it that has been dead for no longer than 1 minute and died violently. The target's spirit rises as a specter in the space of its corpse or in the nearest unoccupied space. The specter is under the wraith's control. The wraith can have no more than seven specters under its control at one time.",
        name: 'Create Specter',
      },
    ],
  },
  {
    name: 'Zombie',
    armor_class: 8,
    hit_points: 22,
    hit_dice: '3d8',
    strength: 13,
    dexterity: 6,
    constitution: 16,
    intelligence: 3,
    wisdom: 6,
    charisma: 5,
    challenge_rating: 0.25,
    actions: [
      {
        damage_bonus: 1,
        damage_dice: '1d6',
        attack_bonus: 3,
        desc: 'Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.',
        name: 'Slam',
      },
    ],
  },
];
