const mongoose = require('mongoose');
const genres = require('./movies-models/Genres');
const productionCompanies = require('./movies-models/productionCompanies');
const productionCountries = require('./movies-models/productionCountries');
const spokenLanguage = require('./movies-models/spokenLanguage');
const keyword = require('./movies-models/keyword');



var MoviesSchema = new mongoose.Schema({
    id: {
    type: Number
  },
  original_title: {
    type: String
    
  },
  original_language: {
    type: String
    
  },
  budget: {
    type: Number
    
  },
  homepage: {
    type: String
  },
  genres: {
      type: genres
      
  },
  keywords: {
      type: keyword
  },
  overview: {
      type: String
      
  },
  popularity: {
      type: mongoose.Schema.Types.Decimal128
      
  },
  production_companies: {
      type: productionCompanies
      
  },
  production_countries: {
      type : productionCountries
      
  },
   release_date: {
      type : Date
      
  },
  revenue: {
      type: Number
      
  },
  runtime: {
      type: Number
    },

  spokenLanguage:{
      type: spokenLanguage
    
      
  },
  status: {
    type: String
  },
  tagline: {
    type: String
  },
  title: {
    type:String
    
  },
  vote_average: {
    type: mongoose.Schema.Types.Decimal128
    
  },
  vote_count: {
    type: Number
    
  }
});



var Movies = mongoose.model('movies', MoviesSchema);

module.exports = {Movies}