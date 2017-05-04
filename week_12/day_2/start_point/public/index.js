var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var input = document.querySelector('input');
  input.onkeyup = handleKeyPress;

  var select = document.querySelector('select');
  select.onchange = handleSelectChanged;
  
}


var handleSelectChanged = function(){
  var PTag = document.querySelector('#select-result');
  PTag.innerText = this.value + " , excellent";
}




var handleKeyPress = function(){
  var pTag = document.querySelector('#text-result');
  pTag.innerText = this.value;
}

var buttonCounter = 0;


var handleButtonClick = function(){
  var PTag = document.querySelector('#button-result');
  buttonCounter += 1;
  PTag.innerText = "Woah dude, totally been clicked " + buttonCounter + ", times man"
}



window.onload = app;
