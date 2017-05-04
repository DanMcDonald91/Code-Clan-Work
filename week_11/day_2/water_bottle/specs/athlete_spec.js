var athlete = require('../athlete');
var assert = require('assert');


describe('athlete', function(){
  beforeEach(function(){
    athlete.hydration = 100;
  })
  it('should start with hydration 100', function(){
    assert.equal(100, athlete.hydration);
  });

  it('should start with 0 distance run', function(){
    assert.equal(0, athlete.distanceRun);
  });


  it('should loose 10 hydration for ever 1 run', function(){
    athlete.run(1);
    assert.equal(90, athlete.hydration);
  });
  it(' does not run if hydration = 0', function(){
    athlete.run(10);
    assert.equal("I am too thirsty", athlete.run(1));
  })
})