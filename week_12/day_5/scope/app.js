// var name = 'Ally'; //Global Scope

// // Global Scope Out Here


// //Scope A: GLobal Scope Out Here
// var myFunction = function() {
  
//   var name = "John";
//   //Scope B: Local scope in here
//   var myOtherFunction = function(){
// console.log(name);
//   };
//   myOtherFunction();

// }

// console.log(myFunction()); 



// var myFunction = function() {
//   console.log(this);
// }

// myFunction();

var myObject = {}

myObjext.myMethod = function() {
  console.log(this);
};

myObject.myMethod();