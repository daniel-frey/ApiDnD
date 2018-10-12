'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

const basicAccMiddleware = require('../lib/basic-account-middleware');
const dungeonMover = require('../lib/dungeon-traversal');
const Account = require('../models/account');
const Character = require('../models/character');
const combat = require('../lib/combat');
const traps = require('../lib/traps');
const logger = require('../lib/logger');

const jsonParser = bodyParser.json();
const router = module.exports = new express.Router();

// ====================================================================================
// EXPLORE COMMANDS
// ====================================================================================
router.put('/api/move/:alias', jsonParser, basicAccMiddleware, (request, response, next) => {
  // moves into room, returns room description and name!
  // if you move into a room with an encounter, generates the encounter, and prompts the user to
  // start the fight!
  // if you move out of a room that has a trap, you proc the trap unless it's avoidable without a
  // saving throw.
  return Account.findById(request.account._id)
    .then((account) => {
      return Character.findById(account.character[0])
        .then((character) => {
          dungeonMover.dungeonTraversal(request.params.alias, character);
          if (character.currentRoom.encounter) {
            account.save();
            character.save();
            return response.json({
              warning: 'you\'ve come across an encounter! engage or run!',
              status: character.class,
              runChoices: character.currentRoom.connectingRooms,
            });
          }
          account.save();
          character.save();
          return response.json({
            room: character.currentRoom.description,
            roomName: character.currentRoom.roomName,
            connectingRooms: character.currentRoom.connectingRooms,
          });
        });
    })
    .catch(() => {
      return next(new HttpError(404), 'room not found.');
    });
});
router.put('/api/move/check/:id', jsonParser, basicAccMiddleware, (request, response, next) => {
  // checks room for traps! if you fail the check, you get a warning. if you succeed, you are now
  // knowledgable of the trap and how it works.
  return Character.findById(request.account.character.id)
    .then((character) => {
      const result = traps.checkRoom(character);
      character.save();
      return response.json({
        result,
        connectingRooms: character.currentRoom.connectingRooms,
      });
    })
    .catch(() => {
      return next(new HttpError(404), 'character not found.');
    });
});

// ====================================================================================
// COMBAT COMMANDS
// ====================================================================================
router.put('/api/fight/confirm/:id', jsonParser, basicAccMiddleware, (request, response, next) => {
  // before an encounter, the user has to declare the rules to the fight, as in when they want
  // to use their potions, what their combat behavior is, etc. right now.
  return Character.findById(request.params.id)
    .then((character) => {
      logger.log(logger.INFO, character);
      const results = combat(character._doc, character._doc.currentRoom.encounter.creature);
      character.save();
      return response.json(results);
    })
    .catch(() => {
      return next(new HttpError(404), 'character not found.');
    });
});
router.put('/api/fight/run/:alias', jsonParser, basicAccMiddleware, (request, response, next) => {
  // the player can also choose to run away! they choose which direction to run away to.
  return Character.findById(request.params.id)
    .then((character) => {
      dungeonMover.dungeonTraversal(request.params.alias, character);
      character.save();
      return response.json({
        notice: 'don\'t be scared of a fight!',
        room: character.currentRoom.description,
        connectingRooms: character.currentRoom.connectingRooms,
      });
    })
    .catch(() => {
      return next(new HttpError(404), 'room not found.');
    });
});

// ====================================================================================
// STANDBY COMMANDS
// ====================================================================================
router.get('/api/status/:id', jsonParser, basicAccMiddleware, (request, response, next) => {
  // gives all relevant player information ie. HP, inventory, current damage, skills, ac, and
  // current room.
  return Character.findById(request.params.id)
    .then((character) => {
      return response.json({
        HP: character.class.hp,
        ac: character.class.ac,
        currentRoom: character.currentRoom.description,
        inventory: character.class.inventory,
      });
    })
    .catch(() => {
      return next(new HttpError(404), 'char not found.');
    });
});
