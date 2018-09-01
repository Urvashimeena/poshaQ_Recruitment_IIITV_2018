const mongoose = require('mongoose');

var productionCountries = new mongoose.Schema({
    iso_3166_1: {
    type: String
  },
  name : {
    type : String
  }
});


module.exports = {productionCountries}