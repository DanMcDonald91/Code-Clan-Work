var express = require('express')
var dogRouter = express.Router();

var dogs = ["Labrador", "Husky", "Dalmation", "Cockapoo"];


dogRouter.get('/', function(req, res) {
  res.json(dogs);
});

dogRouter.get('/:id', function(req, res){
  res.json({data: dogs [req.params.id]});
});

dogRouter.put('/:id', function(req, res) {
  dogs[req.params.id] = req.body.dog;
  res.json({data: dogs});
});

dogRouter.delete('/:id', function(req, res) {
  dogs.splice(req.params.id, 1);
  res.json({data: dogs});

});

module.exports = dogRouter;
