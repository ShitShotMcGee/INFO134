var request = new XMLHttpRequest();

request.open('GET', 'https://hotell.difi.no/api/json/bergen/dokart?', true);

request.onload = function () {
    //JSON data
    var data = JSON.parse(this.response);
    data.forEach(toalett => {
        console.log(toalett.plassering);
    });
}


request.send();