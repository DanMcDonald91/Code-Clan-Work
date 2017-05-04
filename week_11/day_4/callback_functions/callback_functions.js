// //CALLBACK FUNCITONS
 

//  // setting time delay for 2 seconds
//  var print = function(){
//   console.log("Inside the callback function");
//  };
//  setTimeout(print,2000);
//  //example of a anom function



//  setTimeout(print,2000);

//  function print(){
//   console.log("Inside the callback fucntion");
 // };
 //example of a named function


 //CALLING FUNCTIONS WITHIN FUNCTIONS

 // var logRed = function() {
 //  console.log("It's red!");
 // }

 // var logNotRed = function(){
 //  console.log("It's Not red!");
 // }


 // var redChecker = function(colour, logRed, logNotRed){
 //  //passing in the two functions

 //  if(colour === "red"){
 //    logRed();
 //  }else{
 //    logNotRed();
 //  }
 //  }

 //  redChecker("red", logRed, logNotRed);










 function publish(item, author, callback){
  console.log(item);
  var date = new Date();


  callback(author, date);
 }

 function messages(author, time){
  var sendTime = date.toLocaleTimeString();
  console.log("Sent from" + author + "At" + time)
 }

 function articleDetails(author, date){
  var pubDate = date.toDateString();
  console.log("Written by" + author);
  console.log("Published on" + pubDate);
 }

 publish("My Article", "Ruth", articleDetails);
 
