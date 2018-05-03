var lekeplass = 'https://hotell.difi.no/api/json/bergen/lekeplasser?';
var toalett = 'https://hotell.difi.no/api/json/bergen/dokart?';

function selectorOption1(){
    hentData(lekeplass ,selectCreateor1);
}




function selector1(){
    hentData(lekeplass ,velg);
}

function selector2(){
    hentData(toalett,sammen);
}

function selector3(){
    hentData(toalett,sammen1);
}
// lager select/option dropDown

function selectCreateor1(data) {
    for (var i = 0; i < data.entries.length; i++) {
        var select = document.getElementById("Select");
        var option = document.createElement("option");
        option.text = data.entries[i].navn;
        option.value = data.entries[i].navn;
        select.add(option);
    }
}







function sammen(dataUrl) {
var listl = [];

    for (var i = 0; i < dataUrl.entries.length; i++) {
        lat2 = dataUrl.entries[i].latitude;
        lng2 = dataUrl.entries[i].longitude;

        var b =  lat2- lng2;
        var a = lat1 - lng1;
        var c = Math.sqrt( a*a + b*b );
        listl.push(c);

    }

    }

var lat2 ;
var lng2 ;
var lat1 ;
var lng1;


function visNermeste () {
    selector1();
    selector2();
    mapmap();


}

//Legger valgte element i selct/option i "minFavLekeplass" og skriver det ut i html.
//den sammenligner også lekeplass listen hantet fra web og hva som blir valgt selct/option
function velg(dataUrl) {
    var x = document.getElementById("Select").selectedIndex;
    var y = document.getElementById("Select").options;
    document.getElementById("minFavLekeplass").innerHTML = "Min Favoritt lekeplass er" + " " + y[x].text;

    for (var i = 0; i < dataUrl.entries.length; i++) {


        if (dataUrl.entries[i].navn === y[x].text) {

            lat1 = dataUrl.entries[i].latitude;
            lng1 = dataUrl.entries[i].longitude;

        }

    }
}
// lager kart til siden.
function mapmap() {
    var myLatLng1 = new google.maps.LatLng(lat1, lng1);
    var myLatLng2 = new google.maps.LatLng(lat2, lng2);


    var map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 11,
        center: {lat: 60.391011, lng: 5.325950},
    });

    var marker = new google.maps.Marker({
        position: myLatLng1,
        map: map,
        title: 'lekeplass'

    });

    var marker = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        title: 'toalett'

    });
}

