'use strict';

const superagent = require('superagent');

const server = require('../lib/server');
const accCharMock = require('./lib/acc-char-mock');
const logger = require('../lib/logger');

const API_URL = `http://localhost:${process.env.PORT}`;

describe('USER PLAYS VIDEO GAME', () => {
  beforeAll(server.start);
  afterAll(server.stop);
  beforeEach(accCharMock.pUserCleanMock);

  test('user creates account, chooses character, plays video game.', () => {
    return accCharMock.pUserMock()
      .then((mock) => {
        return superagent.get(`${API_URL}/api/status/${mock.account.character[0]._id}`)
          .auth(mock.request.username, mock.request.password)
          .then((status) => {
            logger.log(logger.INFO, 'status', status);
            expect(status.body.HP).toEqual(10);
            expect(status.body.ac).toEqual(16);
            expect(status.body.currentRoom).toEqual('At the [Entrance], Bright, brilliant colors are to be seen everywhere, the stones and pigments undimmed by the passage of decades. The floor of the corridor is a colorful mosaic of stone, with a distinct winding path of red tiles about two feet wide snaking its way south down the corridor.  No stonework can be seen on the walls or the ceiling twenty feet above, for some cement or plaster has been smoothed over all of these surfaces and then illustrated. The scenes show fields with kine grazing, workers of various races and strange human-animal mixtures--pig human, ape-human, and dog-human--going about various tasks. Certain of the frescoes show rooms of some building--a library filled with many books and scrolls, the door of a torture chamber, and a wizard\'s work room. There are chairs, windows, boxes, bales, doors, chests, birds, bats, spiders, and all manner of things shown on the walls.');
            expect(status.body.inventory).toEqual([]);
            return superagent.put(`${API_URL}/api/move/Archway`)
              .auth(mock.request.username, mock.request.password)
              .then((response) => {
                expect(response.body.roomName).toEqual('The Arch of Mist');
                return superagent.put(`${API_URL}/api/move/Entrance`)
                  .auth(mock.request.username, mock.request.password)
                  .then((responsetwo) => {
                    expect(responsetwo.body.roomName).toEqual('Entrance of the Tomb of Horrors');
                    return superagent.put(`${API_URL}/api/move/Fresco`)
                      .auth(mock.request.username, mock.request.password)
                      .then((responsethree) => {
                        expect(responsethree.body.roomName).toEqual('Fresco of the Wizardly Work Room');
                        return superagent.put(`${API_URL}/api/move/Gargoyle`)
                          .auth(mock.request.username, mock.request.password)
                          .then((responsefour) => {
                            logger.log(logger.INFO, responsefour.body);
                            expect(responsefour.body.warning).toBeTruthy();
                            return superagent.put(`${API_URL}/api/fight/confirm/${mock.account.character[0]._id}`)
                              .auth(mock.request.username, mock.request.password)
                              .then((result) => {
                                expect(typeof result.body).toEqual('object');
                              });
                          });
                      });
                  });
              });
          });
      });
  });
});
