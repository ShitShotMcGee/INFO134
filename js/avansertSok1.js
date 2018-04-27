// link til json data fra en url
var link = 'https://hotell.difi.no/api/json/bergen/dokart?';


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


function loadListe(data) {
    var text;
    text = "<ol>";
    for (i = 0; i < data.entries.length; i++) {
        text += "<li>" + data.entries[i].plassering + "</li>";
    }
    text += "</ol>";
    document.getElementById('liste').innerHTML = text;
}

// funksjonen som gjør at list lastes in på siden, som tar in en url og en callback funksjon som parameter
function start() {
    hentData(link, loadListe);
}

// avansert søk knappen, som tar in en url og en callback funksjon parameter
function start2() {
    hentData(link, search);
}


// avansert søk funksjonen
function search(dataUrl) {
    var searchResults = [];
    var searchObj = {};
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
        function getTime() {
            let arr = [];
            let arrP = [];

            for (i = 0; i < data.entries.length; i++) {
                let list = data.entries[i].tid_hverdag;
                arr.push(list.split("-"));
            }
            console.log(arr);

            for (i = 0; i < arr.length; i++) {
                arrP.push(parseFloat(arr[i][0]));
                arrP.push(parseFloat(arr[i][1]));
            }
            console.log(arrP);

            getTime();
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
    for (i = 0; i < dataUrl.entries.length; i++) {
        var truthChecker = 0;
        for (x = 0; x < searchParam.length; x++) {
            if (dataUrl.entries[i][searchParam[x]] === searchObj[searchParam[x]]) {
                truthChecker++;
            }

        }
        if (truthChecker === searchParam.length) {
            searchResults.push(dataUrl.entries[i]);
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












