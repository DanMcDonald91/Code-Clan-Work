var makeRequest = function(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open("GET", url);
  xhr.send();
}


var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
};



MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      posistion: coords,
      map: this.googleMap
    });
  }
};

var GeoCoder = function(address, mapWrapper){
  this.address = address;
  this.mapWrapper = mapWrapper;
  this.addressInfo = {};
};

GeoCoder.prototype = {
  geoCode: function(){
    var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.address;
    
    var geoCoderThis = this;
    makeRequest(url, function(){
      geoCoderThis. addressInfo = JSON.parse(this.responseText);
      debugger;
    });
  }
};

var handleBtnClick = function(){
  var input = document.querySelector("#adress");
  var adress = input.value;
  console.log(adress);
};

var app = function(){
  var button = document.querySelector("button");
  button.onclick = handleBtnClick;

  var container = document.getElementById("map");
  var center = {
    lat: 55.857092,
    lng: -4.244469
  };
  var zoom = 10;

  var mainMap = new MapWrapper(container, center, zoom);

  var button 
  

};

window.onload = app;