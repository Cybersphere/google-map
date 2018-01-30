var map;
var locations = [];
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 68.399, lng: 81.035},
        zoom: 3
    });

    var script = document.createElement('script');

    script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
    document.getElementsByTagName('head')[0].appendChild(script);

   window.eqfeed_callback = function(results) {
        for (var i = 0; i < results.features.length; i++) {
            var coords = results.features[i].geometry.coordinates;
            var latLng = new google.maps.LatLng(coords[1],coords[0]);
            var marker = new google.maps.Marker({
                position: latLng,
                map: map

            });


        }

    }



}


