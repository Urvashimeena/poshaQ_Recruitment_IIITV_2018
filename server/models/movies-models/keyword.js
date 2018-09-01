
const mongoose = require('mongoose');

var Keyword = new mongoose.Schema({
    id: {
    type: Number
  },
  name : {
    type : String
  }
});


module.exports = {Keyword}
