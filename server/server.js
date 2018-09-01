require('./config/config');
const  _ = require('lodash');
const {mongoose} = require('./db/mongoose');
const {Movies} = require('./models/movies');
const {Credits} = require('./models/credits');
const bodyParser = require('body-parser');
const express = require('express');
const csv = require("fast-csv");
var async = require('async');



var app = express();
app.use(bodyParser.json());
const port = process.env.PORT;

app.set('view engine', 'ejs');

app.get('/' , function(req,res) {
  res.render('index');
});

app.get('/importmoviescsv', function(req, res, next) {

var csvStream = csv()
        .on("data", function(data){
         
        console.log(data);
         var item = new Movies({

              budget: data[0],
              genres: data[1],
              homepage: data[2],
              id: data[3],
              keywords:data[4] ,
			  original_language:data[5],
              original_title:data[6],
              overview:data[7],
              popularity:data[8],
              production_companies:data[9],
              production_countries:data[10],
              release_date:data[11],
              revenue:data[12],
              runtime:data[13],
              spoken_languages:data[14],
              status:data[15],
              tagline:data[16],
              title:data[17],
              vote_average:data[18],
              vote_count:data[19]
         });
         
          item.save(function(error){

            //console.log(item);

              if(error){

                   throw error;

              }

          }); 

    }).on("end", function(){
          console.log(" End of file import");
    });
  
    moviestream.pipe(csvStream);

    res.json({success : "Data imported successfully.", status : 200});
     
  })

app.get('/importcreditscsv', function(req, res, next) {

var csvStream = csv()
        .on("data", function(data){
         
         var item = new Movies({

              movie_id: data[0],
              title: data[1],
              cast: data[2],
              crew: data[3]
         });
         
          item.save(function(error){

            //console.log(item);

              if(error){

                   throw error;

              }

          }); 

    }).on("end", function(){
          console.log(" End of file import");
    });
  
    creditstream.pipe(csvStream);

    res.json({success : "Data imported successfully.", status : 200});
     
  });



app.post('/movies', function(req, res) {
   console.log(req.body);
  var movies = new Movies(req.body);
  movies.save(function(err, movie) {
    if (err)
    res.send(err);
  else
      res.json({movie});
    console.log(movie);
  });

});




app.post('/getprofit', (req, res, next) => {

  var body = _.pick(req.body,["year"]); 
  var year = parseInt(body.year);
  Movies.find({'release_date': {'$gte': new Date(year, 1, 1), '$lt': new Date(year, 1, 1)}})
    .distinct('production_companies.name')
    .then(data => {

      var totalprofit = [];
      async.each(data,
        (movie, callback) => {
          var prodName = movie;
          Movies.aggregate([
            {
              $match:{'production_companies.name': prodName}
            },
            {
              $group: {
                _id: prodName,
                
                count: {$sum: 1}
              }
            },
            {
              $project:
              {
                  totalRevenue: {$sum : "$Movies.revenue"},
                  totalBudget: {$sum : "$Movies.budget"}
              }
            },
            {
              $addFields: {
                output: {
                  $subtract: ['$totalRevenue', '$totalBudget']
                },
                Actualprofit: {
                  $divide: ['$output', '$count']
                }
              }
            },
            {
              $project:
              {
                _id: 0,
                profit: '$Actualprofit'
              }
            }
          ])
            .then(data => {
              var profitObject = {};
              profitObject[movie] = data[0].profit;
              totalprofit.push(profitObject);
              callback(null, profitObject);
            })
            .catch((e) => {
            console.log('Error').send();
          });
        },
         function (err) {
            if(err)
            {
              res.send(err);
            }
            else
            {
              res.send(totalprofit);
            }
           
        });
      
    });
});

app.listen(port , () => {
  console.log(`Server is start at port ${port}`);
});