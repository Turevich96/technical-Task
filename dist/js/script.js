
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: 50.396336, lng: 30.631734,  type: 'info'};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});

    var iconBase =
            'https://developers.google.com/maps/documentation/javascript/examples/full/images/';

        var icons = {
         
          info: {
            icon: iconBase + 'map-point.png'
          }
        };

        var aladin = [
            {
              position: new google.maps.LatLng(50.396336, 30.631734),
              type: 'info'
            }
        ],
       
  }