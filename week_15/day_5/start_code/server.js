var express = require('express');
var parser = require('body-parser');
var app = express();
var path = require("path");
var MongoClient = require('mongodb').MongoClient;
var QuoteQuery = require('./client/src/models/quoteQuery');
var quoteQuery =  new QuoteQuery();
app.use(parser.urlencoded({extended: true}));
app.use(express.static('client/build'));

MongoClient.connect('mongodb://localhost:27017/star_wars',
 function(err, database){
  if(err) return console.log(err);
  db = database;
  console.log('connected');
  app.listen(3000, function(){
    console.log("Listening on port 3000");
 });
});
 

app.get('/', function(req, res){
  
  quoteQuery.all(function(){
    res.json(results);
  })

});

app.post('/quote', function(req, res){
  console.log(req.body.name);
  var collection = db.collection('quotes');
  collection.save(req.body , function(err, result){
    if(err) return console.log(err);
    console.log('saved to db');
    res.redirect('/');
  });
});

app.get('/quotes', function(req, res) {
  db.collection('quotes').find().toArray(function(err, results){
    if(err) return console.log(err);
    res.json(results);
});
});

app.post('/delete', function(req, res){
db.collection('quotes').remove();
res.redirect('/');

})