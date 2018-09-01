const mongoose = require('mongoose');

var spokenLanguage = new mongoose.Schema({
    iso_639_1: {
    type: String
  },
  name : {
    type : String
  }
});


module.exports = {spokenLanguage}