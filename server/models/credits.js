const mongoose = require('mongoose');
const crew = require('./credits-models/crew');
const cast = require('./credits-models/cast');
const _ = require('lodash');


var CreditsSchema = new mongoose.Schema({
    movie_id: {
    type: Number,
    unique: true
  },
  title: {
    type: String,
    minlength: 1
  },
  cast: {
    type: cast,
    minlength: 2
  },
  crew: {
    type: crew
  }
});



var Credits = mongoose.model('credits', CreditsSchema);

module.exports = {Credits}