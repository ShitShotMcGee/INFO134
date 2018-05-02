var lekeplass = 'https://hotell.difi.no/api/json/bergen/lekeplasser?';

function startLekeplass() {
    hentData(lekeplass, lekeplassListe);
    hentData( lekeplass,initMap  )
}

function finnlekeplass() {

    hentData(lekeplass, finn);
}





function lekeplassListe(data) {
    var text;
    text = "<ol>";
    for (i = 0; i < data.entries.length; i++) {
        text += "<li>" + data.entries[i].navn + "</li>";
    }
    text += "</ol>";
    document.getElementById('listeLekeplass').innerHTML = text;

}
// funksjonen som gjør at list lastes in på siden, som tar in en url og en callback funksjon som parameter


var searchResults = [];
function finn(dataUrl) {
    searchResults = [];
    check(dataUrl);

    updateLekeplass ();
    updateMap();


}

function check (dataUrl) {
    var sjekk = document.getElementById('finne');
    var searchObj = {"navn": sjekk.value};
    var searchParam = Object.keys(searchObj);
    for (var i = 0; i < dataUrl.entries.length; i++) {
        var checker = 0;
        for (var x = 0; x < searchParam.length; x++) {
            if (dataUrl.entries[i][searchParam[x]] === searchObj[searchParam[x]]) {
                checker++;
            }

        }
        if (checker === searchParam.length) {
            searchResults.push(dataUrl.entries[i]);
        }
    }

}

function updateLekeplass () {


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


}



function rekne (dataUrl) {
    var long = document.getElementById()


    var a =  dataUrl.entries - x2;
    var b = y1 - y2;

    var c = Math.sqrt( a*a + b*b );

// c is the distance
}