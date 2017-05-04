var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
};

var requestCompleted = function(){
  if (this.status !== 200) {
    return;
  }
  var jsonString = this.responseText;
  var movie = JSON.parse(jsonString);

  displayResults(movie);
}