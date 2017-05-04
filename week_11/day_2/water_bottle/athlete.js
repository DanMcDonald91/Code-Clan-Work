var athlete = {
  hydration: 100,
  distanceRun: 0,
  run: function(distance){
    if(this.hydration !== 0){
      this.hydration -= (distance * 10);
      this.distance += distance;
    }
    }
  }
};


// athlete  object would not go into water bottle
//object because it breaks single responsibility
module.exports = athlete;