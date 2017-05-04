var functionCaller = function(myCallback, x){
  return myCallback(x);

};
functionCaller(console.log, 5)

//_______________________________________________
var increment = function(number){
  return number + 1;
};

var square = function(number){
  return number * number;
};

vardoSomeBoringMaths = function(callback, value){
  console.log(callback(value));
};

doSomeBoringMathsForMe(square, 3);
//________________________________________________