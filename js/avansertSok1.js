var link = 'https://hotell.difi.no/api/json/bergen/dokart?';

// function getJson(url, callback) {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
// // Typical action to be performed when the document is ready:
//             callback(xhttp.responseText)
//         }
//     };
//     xhttp.open("GET", url, true);
//     xhttp.send();
// }
//
// function setup(data) {
//     console.log(data);
// }
// function start() {
//     hentData(url, setup());
// }




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


function loadListe(data) {
    var text;
    text = "<ol>";
    for (i = 0; i < data.entries.length; i++) {
        text += "<li>" + data.entries[i].plassering + "</li>";
    }
    text += "</ol>";
    document.getElementById('liste').innerHTML = text;
}

function start() {
    hentData(link, loadListe);
}

//avansert søk

function search() {
    var xhr = new XMLHttpRequest();
    var url = 'https://hotell.difi.no/api/json/bergen/dokart?';
    var searchResults = [];
    var searchObj = {};
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            var jsonData = JSON.parse(xhr.responseText);

            var skjekkHerre = document.getElementById('herre');
            var skjekkDame = document.getElementById('dame');
            var skjekkRullestol = document.getElementById('rullestol');
            var skjekkStellerom = document.getElementById('stellerom');
            var skjekkAapen = document.getElementById('aapen');
            var skjekkGratis = document.getElementById('gratis');
            var sjekkMakspris = document.getElementById('makspris');

            if (skjekkHerre.checked == true) {
                searchObj.herre = "1";
            }
            if (skjekkDame.checked == true) {
                searchObj.dame = "1";
            }
            if (skjekkRullestol.checked == true) {
                searchObj.rullestol = "1";
            }
            if (skjekkStellerom.checked == true) {
                searchObj.stellerom = "1";
            }
            if (skjekkAapen.checked === true) {
                var finn = /\d{2}.\d{2}\s-\s\d{2}.\d{2}/;
                var klokkeslett = [];
                for (i = 0; i < jsonData.entries.length; i++) {

                    klokkeslett.push(jsonData.entries[i].tid_hverdag.split(' ', 3));

                    console.log(klokkeslett);
                }


            }
            if (skjekkGratis.checked == true) {
                searchObj.pris = "0";
            }
            if (skjekkHerre.checked == false && skjekkDame.checked == false && skjekkRullestol.checked == false &&
                skjekkStellerom.checked == false && skjekkAapen.checked == false && skjekkGratis.checked == false) {
                alert(" Ingenting er markert, du må markere en box  ")
            }


            var searchParam = Object.keys(searchObj);
            for (i = 0; i < jsonData.entries.length; i++) {
                var checker = 0;
                for (var x = 0; x < searchParam.length; x++) {
                    if (jsonData.entries[i][searchParam[x]] === searchObj[searchParam[x]]) {
                        checker++

                    }

                    }
                if (checker === searchParam.length) {
                    searchResults.push(jsonData.entries[i]);
                }
            }

            if (searchResults.length > 0) {
                var text;
                text = "<ol>";
                for (i = 0; i < searchResults.length; i++) {
                    text += "<li>" + searchResults[i].plassering + "</li>";
                }
                text += "</ol>";
                document.getElementById('liste').innerHTML = text;
            } else {

                document.getElementById('liste').innerHTML = "Det finnest ingen toaletter med de kriteriumene";
            }

            var map;
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 60.391011, lng: 5.325950},
                zoom: 14
            });

            for (var i = 0; i < searchResults.length; i++) {
                var data = searchResults[i],
                    latLng = new google.maps.LatLng(data.latitude, data.longitude);

                // Creating a marker and putting it on the map
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,

                });
            }

        }

    }
    xhr.send();
}

function initMap() {
    var xhr = new XMLHttpRequest();
    var url = 'https://hotell.difi.no/api/json/bergen/dokart?';
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if (this.status == 200) {
            var jsonData = JSON.parse(xhr.responseText);
            var map;
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 60.391011, lng: 5.325950},
                zoom: 14
            });
            for (var i = 0; i < jsonData.entries.length; i++) {
                var data = jsonData.entries[i],
                    latLng = new google.maps.LatLng(data.latitude, data.longitude);

                //Creating a marker and putting it on the map
                var marker = new google.maps.Marker({
                    position: latLng,
                    map: map,

                });
            }
        }
    }
    xhr.send();
}











