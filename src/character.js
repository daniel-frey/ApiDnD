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
  weapon: {
    type: Object,
    required: false,
  },
  skill: {
    type: Object,
    required: false,
  },
  health: {
    type: Number,
    required: true,
  },
  stats: {
    type: Object,
    required: true,
  },
});

module.exports = mongoose.model('character', characterSchema);
