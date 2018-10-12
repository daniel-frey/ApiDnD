'use strict';

const mongoose = require('mongoose');

const characterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  class: {
    type: Object,
    required: true,
  },
  account: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'account',
  },
  currentRoom: { 
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model('character', characterSchema);
