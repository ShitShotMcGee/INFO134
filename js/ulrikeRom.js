var link = 'https://tp.data.uib.no/KEYadyga6u4a/ws/room/2.0/rooms.php?id=213';

function startRom() {
    hentData(link, createList());
}

function createList(rom) {
    var text;
    text = "<ul>";
    for (i = 0; i < rom.data.length; i++) {

            text += "<li>" + rom.data[i].name + "</li>";
    }
    text += "</ol>";
    document.getElementById('liste').innerHTML = text;
}
