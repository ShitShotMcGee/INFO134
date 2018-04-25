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
}
// funksjonen som gjør at list lastes in på siden, som tar in en url og en callback funksjon som parameter


function startLekeplass() {
    hentData(lekeplass, lekeplassListe);
}