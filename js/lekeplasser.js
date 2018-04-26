var lekeplass = 'https://hotell.difi.no/api/json/bergen/lekeplasser?';


// en funksjon som henter data ut fra nettet
function hentData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.status == 200) {
            var loadData = JSON.parse(this.responseText);
            callback(loadData);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();

}


function lekeplassListe(data) {
    var text;
    text = "<ol>";
    for (i = 0; i < data.entries.length; i++) {
        text += "<li>" + data.entries[i].navn + "</li>";
    }
    text += "</ol>";
    document.getElementById('listeLekeplass').innerHTML = text;

    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 60.391011, lng: 5.325950},
        zoom: 14
    });
    for (var i = 0; i < data.entries.length; i++) {
        var dataKart = data.entries[i],
            latLng = new google.maps.LatLng(dataKart.latitude, dataKart.longitude);

        //Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,

        });
    }







}
// funksjonen som gjør at list lastes in på siden, som tar in en url og en callback funksjon som parameter


function startLekeplass() {
    hentData(lekeplass, lekeplassListe);
}


function finnleke() {

    hentData(lekeplass, finn);
}

function kart() {
    hentData(lekeplass,kart );

}


function finn(data) {
    var sjekk = document.getElementById('finne');
    var searchObj = {"navn": sjekk.value };
    var searchResults = [];
    var searchParam = Object.keys(searchObj);
    for (i = 0; i < data.entries.length; i++) {
        var truthChecker = 0;
        for (x = 0; x < searchParam.length; x++) {
            if (data.entries[i][searchParam[x]] === searchObj[searchParam[x]]) {
                truthChecker++;
            }

        }
        if (truthChecker === searchParam.length) {
            searchResults.push(data.entries[i]);
        }


    }

    if (searchResults.length > 0) {
        var text;
        text = "<ol>";
        for (i = 0; i < searchResults.length; i++) {
            text += "<li>" + searchResults[i].navn + "</li>";
        }
        text += "</ol>";
        document.getElementById('listeLekeplass').innerHTML = text;
    } else {

        document.getElementById('listeLekeplass').innerHTML = "Det finnest ingen lekeplass med dette navnet";
    }


    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 60.391011, lng: 5.325950},
        zoom: 11
    });

    for (var i = 0; i < searchResults.length; i++) {
        var dataMap = searchResults[i],
            latLng = new google.maps.LatLng(dataMap.latitude, dataMap.longitude);

        // Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,

        });
    }

}