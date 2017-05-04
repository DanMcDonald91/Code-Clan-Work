var Planet = require('./planet');
var assert = require('assert');

describe('Planet', function(){
var planet1;

beforeEach(function(){
  planet1 = new Planet("Earth");
})
it('should have the name Earth', function(){
  assert.equal("Earth", planet1.getName());
});



})

