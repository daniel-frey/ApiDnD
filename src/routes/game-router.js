'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('http-errors');

const bearerAuthMiddleware = require('../lib/bearer-auth-middleware');
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
router.put('/api/move/:alias', jsonParser, bearerAuthMiddleware, (request, response, next) => {
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
router.put('/api/move/check', jsonParser, bearerAuthMiddleware, (request, response, next) => {
  // checks room for traps! if you fail the check, you get a warning. if you succeed, you are now
  // knowledgable of the trap and how it works.
  return Account.findById(request.account._id)
    .then((account) => {
      return Character.findById(account.character[0])
        .then((character) => {
          logger.log(logger.INFO, 'gets into put route?', character._doc);
          const result = traps.checkRoom(character._doc);
          character.save();
          return response.json({
            result,
            connectingRooms: character.currentRoom.connectingRooms,
          });
        })
        .catch(error => next(error));
    })
    .catch(() => {
      return next(new HttpError(404), 'no traps found.');
    });
});

// ====================================================================================
// COMBAT COMMANDS
// ====================================================================================
router.put('/api/fight/confirm', jsonParser, bearerAuthMiddleware, (request, response, next) => {
  // before an encounter, the user has to declare the rules to the fight, as in when they want
  // to use their potions, what their combat behavior is, etc. right now.
  return Account.findById(request.account._id)
    .then((account) => {
      return Character.findById(account.character[0])
        .then((character) => {
          logger.log(logger.INFO, 'character info,', character);
          const results = combat(character._doc, character._doc.currentRoom.encounter.creature);
          character.save();
          return response.json(results);
        })
        .catch(() => {
          return next(new HttpError(404), 'character not found.');
        });
    })
    .catch(() => {
      return next(new HttpError(404), 'invalid command');
    });
});
router.put('/api/fight/run/:alias', jsonParser, bearerAuthMiddleware, (request, response, next) => {
  // the player can also choose to run away! they choose which direction to run away to.
  return Account.findById(request.account._id)
    .then((account) => {
      return Character.findById(account.character[0])
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
});

// ====================================================================================
// STANDBY COMMANDS
// ====================================================================================
router.get('/api/status', jsonParser, bearerAuthMiddleware, (request, response, next) => {
  // gives all relevant player information ie. HP, inventory, current damage, skills, ac, and
  // current room.
  return Account.findById(request.account._id)
    .then((account) => {
      return Character.findById(account.character[0])
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
    })
    .catch(() => {
      return next(new HttpError(404), 'status not found');
    });
});
