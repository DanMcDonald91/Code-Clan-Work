// var wisePerson = {
//   wisdom: function(){
//     console.log("Commit often");
//   }
// }

// var myPerson = Object.create(wisePerson);
// myPerson.walk = function(){
//   console.log("left right left right");
// };


// myPerson.walk();
// myPerson.wisdom();
// var myPerson = {};

// wisePerson.wisdom();




var Fish = function(name, colour){
  this.name = name;
  this.colour = colour;
  
  
};

Fish.prototype = {
swim: function(){
  console.log("splash");
},
eat:function(plankton){
  this.belly.push(plankton);
  console.log("om nom nom");
},
belly: []
};

var myFish = new Fish("nemo", "orange");
myFish.eat(" yum plankton");
console.log(myFish.belly);

var myFish2 = new Fish("swimmy", "dolphin-coloured");
console.log(myFish.swim());