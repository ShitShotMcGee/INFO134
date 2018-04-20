function initMap() {
    var options = {
        zoom: 13,
        center: {lat: 60.389772, lng: 5.331281}
    }
    var map = new
    google.maps.Map(document.getElementById('map'), options);

    for (var x in results) {
        var bul = results[x];
        var loc = new google.maps.LatLng(bul.latitude,bul.longitude);
        var marker = new google.maps.Marker({
            position: loc ,
            title: bul.plassering

            ,
            map: map
        });

    }
}