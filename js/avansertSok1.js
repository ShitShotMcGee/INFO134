function loadListe(){
    var text;
    text = "<ol>";
    for (i = 0 ; i < toaletter.length; i++ ){
        text += "<li>" + toaletter[i].plassering + "</li>";
    }
    text += "</ol>";
    document.getElementById('liste').innerHTML = text;

}


function elementConst(herre, dame, rullestol, stellerom, aapen, pris) {
    this.herre = herre;
    this.dame = dame;
    this.rullestol = rullestol;
    this.stellerom = stellerom;
    this.aapen = aapen;
    this.pris = pris;
}



function search() {
    var searchObj = {};
    var skjekkHerre = document.getElementById('herre');
    var skjekkDame = document.getElementById('dame');
    var skjekkRullestol = document.getElementById('rullestol');
    var skjekkStellerom = document.getElementById('stellerom');
    var skjekkAapen = document.getElementById('aapen');
    var skjekkGratis = document.getElementById('gratis');


    if (skjekkHerre.checked == true) {
        searchObj.herre = 1;
    }
    if (skjekkDame.checked == true ){
        searchObj.dame= 1;
    }
    if (skjekkRullestol.checked == true){
        searchObj.rullestol = 1;
    }
    if (skjekkStellerom.checked == true ) {
        searchObj.stellerom = 1;
    }
    if (skjekkAapen.checked == true ) {
        //dno
    }
    if(skjekkGratis.checked == true ){
        searchObj.pris = 0;
    }
    if(skjekkHerre.checked == false && skjekkDame.checked == false && skjekkRullestol.checked == false &&
        skjekkStellerom.checked == false && skjekkAapen.checked == false && skjekkGratis.checked == false) {
        alert(" Ingenting er markert, du må markere en box  ")
    }
    var searchResults = [];

    var searchParam = Object.keys(searchObj);
    for (i = 0; i < toaletter.length; i++) {
        var truthChecker = [];
        for (x = 0; x < searchParam.length; x++) {
            if (toaletter[i][searchParam[x]] === searchObj[searchParam[x]]) {
                truthChecker.push(true);
            }
            if (truthChecker.length === searchParam.length) {
                searchResults.push(toaletter[i]);
            }
        }
    }

    if (searchResults.length > 0 ){
        var text;
        text = "<ol>";
        for (i = 0 ; i < searchResults.length; i++ ){
            text += "<li>" + searchResults[i].plassering + "</li>";
        }
        text += "</ol>";
        document.getElementById('liste').innerHTML = text;
    } else {

        document.getElementById('liste').innerHTML= "Det finnest ingen toaletter med de kriteriumene";
    }




}





