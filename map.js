var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: {lat: 70.259452, lng: 107.2265625},
        mapTypeId: 'satellite'


    });

    var script = document.createElement('script');

    script.src = 'data.js';
    document.getElementsByTagName('head')[0].appendChild(script);
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
        map: map,
        radius: 3
    });
    heatmap.setMap(map);

}