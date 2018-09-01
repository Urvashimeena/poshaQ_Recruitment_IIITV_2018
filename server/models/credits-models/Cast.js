const mongoose = require('mongoose');

var Cast = new mongoose.Schema({
    cast_id: {
    type: Number
  },
  character: {
    type: String
  },
  credit_id: {
    type: String
  },
  gender: {
    type: Number
  },
  id: {
    type: Number
  },
  name: {
    type:String
  },
  order: {
    type: Number
  }
});


// module.exports = {Cast}