// Section 1

// What types are these?

/* 1.1 */ 1;     //NUMBER
/* 1.2 */ "cat";  //STRING
/* 1.3 */ true; //BOOLEAN
/* 1.4 */ [];  //OBJECT
/* 1.5 */ {}; //OBJECT
/* 1.6 */ 1.1; //NUMBER
/* 1.7 */ var myVariable; //UNDEFINED


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1;//TRUE
/* 2.2 */ "cat";//TRUE
/* 2.3 */ true;//TRUE
/* 2.4 */ NaN;//FALSE
/* 2.5 */ [];//FALSE
/* 2.6 */ {};//FALSE
/* 2.7 */ undefined;//FALSE
/* 2.8 */ "";//FALSE
/* 2.9 */ 0;//FALSE


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var myNum = 1;
// 3.2 Assign a variable that is a string
var myString = " JavaScript is super cool";
// 3.3 Assign a variable that is a boolean
var myQuestion = true;
// 3.4 Assign a variable that is an object
var myObject = {};

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
if(homeworkisfun === true){
  console.log("It sure is")}
  else console.log("Liar!")}
}

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable

var thisanimal = animals.shift();
// 5.2. Assign the last element to a variable
var lastanimal = animals.pop();
// 5.3. Assign the length of an array to a variable
var animallength = animals.length
// 5.4. Add an item to the end of the array
 animals.push("Crocodile");
// 5.5. Add an item to the start of the array
animals.unshift("Bull");
// 5.6. Assign the index of hedgehog to a variable


// Section 6

// 6.1 Create an array of 5 vegetables
var veggies = ["peas", "carrots", "chips", "jam"]
// 6.2 Loop over the array and write to the console using a "while"
var v = 0
while(v < veggies.length{console.log("loop");
v++ })
// 6.3 Loop again using a "for" with a counter
var i = 0;
for (i=0; veggies.length; i++)
// 6.4 Loop again using a "for of"
for (var veg of veggies){console.log(veg);}

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts

// 7.2 Find the amount of money in the account with the largest balance


// 7.3 Find the name of the account with the smallest balance
// var smallestBalance = function(accounts)
// var 

// 7.4 Calculate the average bank account value
// 7.5 Find the value of marcs bank account
// 7.6 Find the holder of the largest bank account
// 7.7 Calculate the total cash in business accounts
// 7.8 Find the largest personal account owner


// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method
function eat(){
  console.log("YUM");
}
var myPerson = {
  name: "John",
  height: "lanky",
  favouritefood: "jam",
  eat: eat()
};