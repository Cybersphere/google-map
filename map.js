var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: -33.865427, lng: 151.196123},

    });

    var script = document.createElement('script');

    script.src = 'data2.js';
    document.getElementsByTagName('head')[0].appendChild(script);
	//eqfeed_callback();
}

function eqfeed_callback(data) {

		
	var heatmapData = [];

	for(var id in data.pin){
		var dotted = data.pin[id];
		
		var mapData = {
			location: new google.maps.LatLng(dotted.latitude, dotted.longitude),
			weight: parseFloat(dotted.doserate)
		};
		heatmapData.push(mapData);
	}


	var heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        weightLocation: heatmapData,
        dissipating: false,
        gradient: [
            'rgba(0, 255, 255, 0)',
            'rgba(0, 255, 255, 1)',
            'rgba(0, 191, 255, 1)',
            'rgba(0, 127, 255, 1)',
            'rgba(0, 63, 255, 1)',
            'rgba(0, 0, 255, 1)',
            'rgba(0, 0, 223, 1)',
            'rgba(0, 0, 191, 1)',
            'rgba(0, 0, 159, 1)',
            'rgba(0, 0, 127, 1)',
            'rgba(63, 0, 91, 1)',
            'rgba(127, 0, 63, 1)',
            'rgba(191, 0, 31, 1)',
            'rgba(255, 0, 0, 1)'
        ],
        map: map
    });
    heatmap.setMap(map);
    /* 
    for (var i = 0; i < results.pin.length; i++) {
        var lat = results.pin[i].latitude;
        var lng = results.pin[i].longitude;
        var latLng = new google.maps.LatLng(lat, lng);

        heatmapData.push(latLng);
    }+
	console.log(heatmapData)
     */
}