function lekeplassListe() {
    xhr = new XMLHttpRequest();
    url = 'https://hotell.difi.no/api/json/bergen/lekeplasser?';
    xhr.open('GET', url, true);
    xhr.onload = function () {
        if(status == 200) {
            var jsonData = JSON.parse(xhr.responseText);
            var text;
            text = "<ol>";
            for (i = 0; i < jsonData.entries.length; i++) {
                text += "<li>" + jsonData.entries[i].plassering + "</li>";
            }
            text += "</ol>";
            document.getElementById('lekeplassliste').innerHTML = text;
        }
    }
    xhr.send();
}