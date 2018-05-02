var lekeplass = 'https://hotell.difi.no/api/json/bergen/lekeplasser?';
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




function myFunction(dataUrl) {
    var x = document.getElementById("Select").selectedIndex;
    var y = document.getElementById("Select").options;
    document.getElementById("minFavLekeplass").innerHTML= "Index: " + y[x].index + " is " + y[x].text;


    for(var i=0; i < dataUrl.entries.length; i++) {


        if(dataUrl.entries[i].navn === y[x].text) {

           var lat = dataUrl.entries[i].latitude;
            var lng = dataUrl.entries[i].longitude;

        }
//ss



        var a = lat - lng;
        var b = y1 - y2;

        var c = Math.sqrt( a*a + b*b );

// c is the distance


    }







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





