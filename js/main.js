
//Google Map function
function initMap(){
var styles = {

};
var location = {
	lat: 40.8054491, 
	lng: -73.9654415};

var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: location
        });
        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
      }