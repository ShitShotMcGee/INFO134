function elementConst(herre, dame, rullestol, stellerom, aapen, gratis) {
    this.herre = herre;
    this.dame = dame;
    this.rullestol = rullestol;
    this.stellerom = stellerom;
    this.aapen = aapen;
    this.gratis = gratis;
}

var skjekkHerre = document.getElementById('herre');
var skjekkDame = document.getElementById('dame');
var skjekkRullestol = document.getElementById('rullestol');
var skjekkStellerom = document.getElementById('stellerom');
var skjekkAapen = document.getElementById('aapen');
var skjekkGratis = document.getElementById('gratis');

var searchObj = {};

skjekkHerre.addEventListener('click', function () {

    if (this.checked) {
        searchObj.herre = 1;
    }
});

skjekkDame.addEventListener('click', function () {
    if (this.checked) {
        searchObj.dame = 1;
    }
});
skjekkRullestol.addEventListener('click', function () {
    if (this.checked) {
        searchObj.rullestol = 1;
    }
});
skjekkStellerom.addEventListener('click', function () {
    if (this.checked) {
        searchObj.stellerom = 1;
    }
});

skjekkAapen.addEventListener('click', function () {
    var tid = new Date();
    var getTid = tid.getHours();

    var regexTid =

    if (this.checked && getTid === ) {
        searchObj.Aapen = 1;
    }
});

skjekkGratis.addEventListener('click', function () {
    if (toaletter.skjekkGratis.checked) {
        searchObj.Gratis = 0;
    }
});



function search() {
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



}








