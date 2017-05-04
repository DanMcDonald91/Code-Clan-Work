var bottle = require('../water_bottle');
var assert = require('assert');

describe('Water Bottle', function(){
  beforeEach(function(){
    bottle.volume = 0;
  })
  it('should be empty at the start', function(){
    assert.equal(0, bottle.volume);

  });
    it('should go to 100 when filled' , function(){
      bottle.fill();
      assert.equal(100, bottle.volume);
  });
it('Goes down by 10 when drank' , function(){
  bottle.fill();
  bottle.drink();
  assert.equal(90, bottle.volume);
});

it('has volume 0 when emptied', function(){
  bottle.fill();
  bottle.empty();
  assert.equal(0, bottle.volume);
});

it('should not be able to go below 0', function(){
  bottle.empty();
  bottle.drink();
  assert.equal(0, bottle.volume);
});
})


