const mongoose = require('mongoose');

var Genres = new mongoose.Schema({
    id: {
    type: Number
  },
  name : {
    type : String
  }
});


module.exports = {Genres}