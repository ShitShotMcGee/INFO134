var lekeplass = 'https://hotell.difi.no/api/json/bergen/lekeplasser?';
function startLekeplass() {
    hentData(lekeplass, lekeplassListe);
}


function finnleke() {

    hentData(lekeplass, finn);
}

function kart() {
    hentData(lekeplass,kart );

}

function drop(){
    hentData(lekeplass ,functionName);
}


function functionName(data) {

    for (var i = 0; i < data.entries.length; i++) {
        var select = document.getElementById("Select");
        var option = document.createElement("option");
        option.text = data.entries[i].navn;
        option.value = data.entries[i].navn;
        select.add(option);
    }

}




function visFavLeke () {

    document.getElementById('name').textContent = localStorage.getItem('name');

}


    function velg() {
        localStorage.setItem('name', document.getElementById('Select').value);
        var selectValue = document.getElementById('Select').value;
        document.getElementById('minFavLekeplass').innerHTML = "min fav er lekeplass er"+ " " + selectValue;


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
            lable:1

        });
    }

}