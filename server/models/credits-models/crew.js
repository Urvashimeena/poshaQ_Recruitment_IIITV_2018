const mongoose = require('mongoose');

var Crew = new mongoose.Schema({
    credit_id: {
    type: Number
  },
  department: {
    type: String
  },
  gender: {
    type: Number
  },
  id: {
    type: Number
  },
  job: {
    type:String
  },
  name: {
    type: Number
  }
});


// module.exports = {Crew}