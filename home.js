function initMap() {
  var mapOptions = {
        center: new google.maps.LatLng(37.2296, 80.4139),
        zoom: 4,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}