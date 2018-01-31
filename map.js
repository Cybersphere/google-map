var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: -33.865427, lng: 151.196123},
        mapTypeId: 'terrain'
    });

    var script = document.createElement('script');

    script.src = 'data.js';
    document.getElementsByTagName('head')[0].appendChild(script);

}

function eqfeed_callback(results) {
    var heatmapData = [];
    for (var i = 0; i < results.pin.length; i++) {
        var lat = results.pin[i].latitude;
        var lng = results.pin[i].longitude;
        var latLng = new google.maps.LatLng(lat, lng);

        heatmapData.push(latLng);
    }
    var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        dissipating: false,
        map: map
    });
    return console.log(heatmapData);
}