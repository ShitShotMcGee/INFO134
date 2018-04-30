// en funksjon som henter data ut fra nettet
function hentData(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function () {
        if (this.status === 200) {
            var loadData = JSON.parse(this.responseText);
            callback(loadData);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();

}


function hentFlydata(url, callback) {
    var xmlxhr = new XMLHttpRequest();
    xmlxhr.onload = function() {
        if(this.status === 200) {
            var loadxml = xml.responseXML;
            callback(loadxml);
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

