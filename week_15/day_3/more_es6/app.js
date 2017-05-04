// var showMood = function(name = "John", mood = "sleepy"){
//   var name = name || "John";
//   var mood = mood || "sleepy";
//   console.log(name, "is", mood);
// }

// showMood("Steve", "tip-top");
//___________________________________________________________________
// var arr = [1,2,3,4];

// var first = arr[0];
// var second = arr[1];

// var [first, third, fourth] = [1,2,3,4];
// var second;

// console.log(first, second, third, fourth);
//-------------------------------------------------------------------

// const myObj = {first: "John", last: "McC"};
// const {first: f, last: l} = myObj;

// console.log(f, l);
//---------------------------------------------------------------------

// const myObj = {first: "John", last: " McC"};

// // var myMethod = ({first, last}) => {
// //   console.log(first, last);


//    var logPerson = (person) => {
//     var first = person.first;
//     var last = person.last;

// console.log(first, last);
// }

// logPerson(person);

const fs = require('fs');

const readFile = (filename, callback) => {
  return new Promise(resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if(err) return err;

      resolve(result + data.toString());
    });
  });
}

readFile("1.txt", "")
.then((result) => readFile("2.txt", result))
.then((result) => readFile("3.txt", result))
.then((result) => readFile("4.txt", result))
.then((result) => console.log(result));

  //------------------------------------------
//   fs.readFile(filename, (err, data) => {
//     if (err) return err;

//     callback(data.toString());
//   });
// }

// readFile("1.txt", (data) => {
//   let result = data;
//   readFile("2.txt", (data) => {
//     result += data;
//     readFile("3.txt", (data) => {
//       result += data;
//       readFile("4.txt", (data) => {
//         result += data;
//         console.log(result);
//       })
//     })
//   })

// });