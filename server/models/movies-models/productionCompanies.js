const mongoose = require('mongoose');

var productionCompanies = new mongoose.Schema({
    id: {
    type: Number
  },
  name : {
    type : String
  
  }
});


module.exports = {productionCompanies}