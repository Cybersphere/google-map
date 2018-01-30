var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 68.399, lng: 81.035},
        zoom: 3
    });
}