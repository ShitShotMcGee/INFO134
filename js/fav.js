var lekeplass = 'https://hotell.difi.no/api/json/bergen/lekeplasser?';
var dass = 'https://hotell.difi.no/api/json/bergen/dokart?';

function selector(){
    hentData(lekeplass ,selectCreateor);
}

function selectCreateor(data) {

    for (var i = 0; i < data.entries.length; i++) {
        var select = document.getElementById("Select");
        var option = document.createElement("option");
        option.text = data.entries[i].navn;
        option.value = data.entries[i].navn;
        select.add(option);
    }


}


function selector1(){
    hentData(lekeplass ,myFunction);
}

function selector2(){
    hentData(dass,sammen);
}

function selector3(){
    hentData(dass,sammen1);
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


    console.log(lat1);
    console.log(lng1);
    console.log(lat2);
    console.log(lng2);








}









function myFunction(dataUrl) {

    var x = document.getElementById("Select").selectedIndex;
    var y = document.getElementById("Select").options;
    document.getElementById("minFavLekeplass").innerHTML = "Index: " + y[x].index + " is " + y[x].text;


    for (var i = 0; i < dataUrl.entries.length; i++) {


        if (dataUrl.entries[i].navn === y[x].text) {

            lat1 = dataUrl.entries[i].latitude;
            lng1 = dataUrl.entries[i].longitude;

        }


    }




}










function mapmap() {
    var myLatLng1 = new google.maps.LatLng(lat1, lng1);
    var myLatLng2 = new google.maps.LatLng(lat2, lng2);


    var map = new google.maps.Map(document.getElementById('map1'), {
        zoom: 4,
        center: {lat: 60.391011, lng: 5.325950},
    });

    var marker = new google.maps.Marker({
        position: myLatLng1,
        map: map,
        title: 'Hello World!'
    });

    var marker = new google.maps.Marker({
        position: myLatLng2,
        map: map,
        title: 'Hello World!'
    });
}





function visFavLeke () {

    document.getElementById('minFavoritt').textContent = localStorage.getItem('name');

}










function velg() {

    localStorage.setItem('name', document.getElementById('Select').value);
    var selectValue = document.getElementById('Select').value;
    document.getElementById('minFavLekeplass').innerHTML = "min fav er lekeplass er"+ " " + selectValue;



}






function sammen1(dataUrl) {
    var listlat = [];
    var listlong =[];
    var begge = [];

    for (var i = 0; i < dataUrl.entries.length; i++) {
        lat2 = dataUrl.entries[i].latitude;
        lng2 = dataUrl.entries[i].longitude;

        var a =  lat2;
        var b = lng2;

        listlat.push(a);
        listlong.push(b);


    }
    begge.push(listlat,listlong);
    console.log(begge);



}

