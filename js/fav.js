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
    hentData(dass ,sammen);
}
function sammen(dataUrl) {

    for (var i = 0; i < dataUrl.entries.length; i++) {
        lat2 = dataUrl.entries[i].latitude;
        lng2 = dataUrl.entries[i].longitude;
        var a = lat1 - lng1;
        var b =  lat2- lng2;

        var c = Math.sqrt( a*a + b*b );



        var d = Math.min(c);


    }

    console.log(d);

}

var lat2 = "";
var lng2 ="";
var lat1 = "";
var lng1 ="";


function visNermeste () {
    selector1();



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
    console.log(lat1);
    console.log(lng1);


}
















function visFavLeke () {

    document.getElementById('minFavoritt').textContent = localStorage.getItem('name');

}










function velg() {

    localStorage.setItem('name', document.getElementById('Select').value);
    var selectValue = document.getElementById('Select').value;
    document.getElementById('minFavLekeplass').innerHTML = "min fav er lekeplass er"+ " " + selectValue;



}




function sele(dataUrl) {

    var ele = document.getElementById('Select');
    for (var i = 0; i < dataUrl.entries.length; i++) {

        ele.innerHTML = ele.innerHTML +
            '<option value="' + dataUrl.entries[i] + '">' + dataUrl.entries[i].navn + '</option>';
    }



}

function show(ele) {

    var msg = document.getElementById('minFavLekeplass');
    msg.innerHTML = "min fav er " + ele.options[ele.selectedIndex].text;
}





