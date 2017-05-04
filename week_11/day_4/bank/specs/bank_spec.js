var Bank = require('../bank');
var assert = require('assert');

describe ('Bank', function(){

  var testBank;

  beforeEach(function(){
    testBank = new Bank();
  });

  it(' should have a name', function(){
    assert.equal("Big Bucks", testBank.name)

  });
})