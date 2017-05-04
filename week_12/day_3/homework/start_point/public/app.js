var app = function(){

  var makeRequest = function(url, callback){
  //create a new XMLHttpRequest object

  var request = new XMLHttpRequest();

  //set type of request, and the url
  request.open("GET", url);

  // set the callback we want it to use when the request is complete.
  request.onload = callback;

  // send the request
  request.send();
  };


  var requestComplete = function(){
    if(this.status !== 200){
      return;
    }

    //grab the response text
    var jsonString = this.responseText;

    var countries = JSON.parse(jsonString);

}

window.onload = app;