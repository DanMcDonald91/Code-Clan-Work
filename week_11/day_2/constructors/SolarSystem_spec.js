var SolarSystem = require('./SolarSystem');
var assert = require('assert');

describe('SolarSystem', function(){
var system1;

beforeEach(function(){
system1 = new SolarSystem([]);
})

it('should have empty planet array', function(){
  assert.equal(0, system1.length);
})