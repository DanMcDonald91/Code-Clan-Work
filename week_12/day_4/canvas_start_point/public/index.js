var app = function(){
  var canvas = document.getElementById("main-canvas");
var context = canvas.getContext('2d');

// var img = document.createElement("img");
// img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png";

// var draw = function(){
//   context.drawImage(img, 200, 200, 90 , 90);
// };

// img.onload = draw;


// context.fillStyle = "green";

// context.fillRect(10, 10, 50, 50);
//                // x and y |  
// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(100, 200);
// context.stroke();

context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 200);
context.stroke();

context.beginPath();
context.moveTo(200, 200);
context.lineTo(200, 300);
context.lineTo(100, 300);
context.closePath();
context.stroke();

// context.beginPath();
// context.moveTo(200, 200);
// context.lineTo(200, 300);
// context.lineTo(100, 300);
// context.closePath();
// context.stroke();

// context.beginPath();
// context.moveTo(100, 100);
// context.lineTo(200, 300);

// context.beginPath();
// context.arc(400, 100, 50, 0, Math.PI*2, true);
// context.stroke();

// context.beginPath();
// context.arc(400, 200, 40, 0, Math.PI*2, true);
// context.fill();

// var drawCircle = function(x, y){
//   context.beginPath();
//   context.arc(x, y, 50, 0, Math.PI*2, true);
//   context.stroke();
// }

// canvas.onclick = function(event){
//  drawCircle(event.x, event.y);
// };
var drawCircle = function(x, y){
  context.beginPath();
  context.arc(x,y, 50, 0, Math.PI*2, true);
  context.stroke();
}

canvas.onclick = function(event){
  drawCircle(event.x, event.y);
};

var colorPicker = document.querySelector('#input-color');
colorPicker.onchange = function(){
  debugger;
  var newColor = this.value;
  context.strokeStyle = newColor;
};
};




window.onload = app;
