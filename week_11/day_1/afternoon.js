//CONTROL FLOW

// var myName = "Matthew";

// if(myName === "Matthew"){
//   console.log("yo my name is " + myName);

// }

// var counter = 1;
// if(counter > 0){
//   console.log("The counter is greater than 0");
// } else{
//   console.log("The counter is less than or equal to 0");
// }


// var counter = 1;
// if(counter > 0){
//   console.log("The counter is greater than 0");
// }else if(counter < 0) {
//   console.log("The counter is less than or equal to 0");
// }else{
//   console.log("The counter is 0");
// }

// var pet = "cat";

// switch (pet) {
//   case "cat":
//   console.log("Soft kitty, warm kitty, little ball of fur");
//   break;
//   case "dog":
//   console.log("Who let the dogs out");
//   break;
//   default:
//   console.log("No pet, sad");
// }

// console.log(1 + 1 === 2? "yay maths" : "noes, math is broken");

//LOOPS IN JS

// traditional for loop

var pets = ["dog", "Cat", "pika"];

for(var i = 0; i< pets.length; i++){
  console.log(pets[i]);
}


for (var pet of pets){
  console.log(pet);
}

var obj = {student1:3, student2:12, student4:30};

for(var key in obj){
  console.log("obj" + key + "=" + obj[key]);
}


//while loop

var x = 0;

while(x < 10){
  console.log("loop" + x);
  x = x + 1;
}