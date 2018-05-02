// link til json data fra en url
var link = 'https://hotell.difi.no/api/json/bergen/dokart?';


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
    hentData(link, initMap)

}

// avansert søk knappen, som tar in en url og en callback funksjon parameter
function start2() {
    hentData(link, search);
}

var searchResults = [];
var searchObj = {};

// avansert søk funksjonen
function search(dataUrl) {
    searchResults = [];
    searchObj = {};
    var skjekkHerre = document.getElementById('herre');
    var skjekkDame = document.getElementById('dame');
    var skjekkRullestol = document.getElementById('rullestol');
    var skjekkStellerom = document.getElementById('stellerom');
    var skjekkAapen = document.getElementById('aapen');
    var skjekkGratis = document.getElementById('gratis');
    var sjekkMakspris = document.getElementById('makspris');

    if (skjekkHerre.checked === true) {
        searchObj.herre = "1";
    }
    if (skjekkDame.checked === true) {
        searchObj.dame = "1";
    }
    if (skjekkRullestol.checked === true) {
        searchObj.rullestol = "1";
    }
    if (skjekkStellerom.checked === true) {
        searchObj.stellerom = "1";
    }
    if (skjekkAapen.checked === true) {
        getTimeStart();
    }

    if (skjekkGratis.checked === true) {
        searchObj.pris = "0";
    }
    if (skjekkHerre.checked === false && skjekkDame.checked === false && skjekkRullestol.checked === false &&
        skjekkStellerom.checked === false && skjekkAapen.checked === false && skjekkGratis.checked === false) {
        alert(" Ingenting er markert, du må markere en box  ")
    }


    check(dataUrl);
    updateToalett();
    updateMap();

}


function check(dataUrl) {


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

}

function updateToalett() {

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

}


function starten() {
    hentData(link, hurtigsok);

}

function getTimeStart() {
    hentData(link, checktimeHverdag);
    hentData(link, checktimeLordag);
    hentData(link, checktimeSondag);
}

function checktimeHverdag(dataUrl) {
    var aapenHverdag = [];
    //henter ut lokaltid, gjør om til string og kombinerer tid og minutt til ett tall
    var tid = new Date();
    var tidString = tid.toString();
    var time = tidString.substr(16, 2);
    var min = tidString.substr(19, 2);
    var lokaltidCombo = time + min;

    var all = /(ALL)/ig;

    if (tid.getDay() <= 5) {
        for (i = 0; i < dataUrl.entries.length; i++) {
            if (dataUrl["entries"][i]["tid_hverdag"].match(all)) {
                aapenHverdag.push(dataUrl.entries[i]);
            }
            else {

                var hentTidString = dataUrl.entries[i].tid_hverdag;

                var aapenTime = hentTidString.substr(0, 2);
                var aapenMin = hentTidString.substr(3, 2);
                var aapenCombo = aapenTime + aapenMin;

                var stengTime = hentTidString.substr(8, 2);
                var stengMin = hentTidString.substr(11, 2);
                var stengCombo = stengTime + stengMin;

                if(aapenCombo < lokaltidCombo && stengCombo > lokaltidCombo){
                    aapenHverdag.push(dataUrl.entries[i]);
                }
            }


        }
    }

    console.log(aapenHverdag);

}

function checktimeLordag(dataUrl) {
    var aapenLordag = [];
    //henter ut lokaltid, gjør om til string og kombinerer tid og minutt til ett tall
    var tid = new Date();
    var tidString = tid.toString();
    var time = tidString.substr(16, 2);
    var min = tidString.substr(19, 2);
    var lokaltidCombo = time + min;

    var all = /(ALL)/ig;

    if (tid.getDay() === 6) {
        for (i = 0; i < dataUrl.entries.length; i++) {
            if (dataUrl["entries"][i]["tid_lordag"].match(all)) {
                aapenLordag.push(dataUrl.entries[i]);
            }
            else {

                var hentTidString = dataUrl.entries[i].tid_lordag;

                var aapenTime = hentTidString.substr(0, 2);
                var aapenMin = hentTidString.substr(3, 2);
                var aapenCombo = aapenTime + aapenMin;

                var stengTime = hentTidString.substr(8, 2);
                var stengMin = hentTidString.substr(11, 2);
                var stengCombo = stengTime + stengMin;

                if(aapenCombo < lokaltidCombo && stengCombo > lokaltidCombo){
                    aapenLordag.push(dataUrl.entries[i]);
                }
            }


        }
    }

    console.log(aapenLordag);

}

function checktimeSondag(dataUrl) {
    var aapenSondag = [];
    //henter ut lokaltid, gjør om til string og kombinerer tid og minutt til ett tall
    var tid = new Date();
    var tidString = tid.toString();
    var time = tidString.substr(16, 2);
    var min = tidString.substr(19, 2);
    var lokaltidCombo = time + min;

    var all = /(ALL)/ig;

    if (tid.getDay() === 7) {
        for (i = 0; i < dataUrl.entries.length; i++) {
            if (dataUrl["entries"][i]["tid_sondag"].match(all)) {
                aapenSondag.push(dataUrl.entries[i]);
            }
            else {

                var hentTidString = dataUrl.entries[i].tid_hverdag;

                var aapenTime = hentTidString.substr(0, 2);
                var aapenMin = hentTidString.substr(3, 2);
                var aapenCombo = aapenTime + aapenMin;

                var stengTime = hentTidString.substr(8, 2);
                var stengMin = hentTidString.substr(11, 2);
                var stengCombo = stengTime + stengMin;

                if(aapenCombo < lokaltidCombo && stengCombo > lokaltidCombo){
                    aapenSondag.push(dataUrl.entries[i]);
                }
            }


        }
    }

    console.log(aapenSondag);

}


function hurtigsok(dataUrl) {
    searchObj = {};
    searchResults = [];
    var aappen = /(åpen)/i;
    var herre = /(herre)||(gutt)/i;
    var dame = /(dame)|(jente)/i;
    var rullestol = /(rullestol)/i;
    var stelle = /(stellerom)/i;
    var gratis = /(gratis)/i;

    if (herre.test(rasktsok.value)) {
        searchObj.herre = "1";
    }
    if (dame.test(rasktsok.value)) {
        searchObj.dame = "1";
    }
    if (rullestol.test(rasktsok.value)) {
        searchObj.rullestol = "1";
    }
    if (stelle.test(rasktsok.value)) {
        searchObj.stellerom = "1";
    }
    if (gratis.test(rasktsok.value)) {
        searchObj.pris = "0";
    }
    if (aappen.test(rasktsok.value)) {

    }

    check(dataUrl);
    updateToalett();
    updateMap();

}













