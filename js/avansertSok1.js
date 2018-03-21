function Sok(herre, dame, rullestol, aapen, stellerom, gratis, klokkeslett, makspris) {
    this.herre = herre;
    this.dame = dame;
    this.rullestol = rullestol;
    this.aapen = aapen;
    this.stellerom = stellerom;
    this.gratis = gratis;
    this.klokkeslett = klokkeslett;
    this.makspris = makspris;
}


var searchObj = {
    herre: [],
    dame: [],
    rulllestol: [],
    stellerom: [],
    aapen: "",
    gratis: []
};

(window.onload = function () {
    var skjekkHerre = document.getElementById('herre');
    var skjekkDame = document.getElementById('dame');
    var skjekkRullestol = document.getElementById('rullestol');
    var skjekkStellerom = document.getElementById('stellerom');
    var skjekkAapen = document.getElementById('aapen');
    var skjekkGratis = document.getElementById('gratis');

    skjekkHerre.addEventListener('click', function () {
        if (skjekkHerre.checked) {
            searchObj.herre = 1;
        }
    });
    skjekkDame.addEventListener('click', function () {
        if (skjekkDame.checked) {
            searchObj.dame = 1;
        }
    });
    skjekkRullestol.addEventListener('click', function () {
        if (skjekkRullestol.checked) {
            searchObj.rullestol = 1;
        }
    });
    skjekkStellerom.addEventListener('click', function () {
        if (skjekkStellerom.checked) {
            searchObj.stellerom = 1;
        }
    });
    skjekkAapen.addEventListener('click', function () {
        if (skjekkAapen.checked) {
            searchObj.Aapen = 1;
        }
    });
    skjekkGratis.addEventListener('click', function () {
        if (skjekkGratis.checked) {
            searchObj.Gratis = 0;
        }
    });


function search() {
    var searchResults = [];
    var searchParam = Object.keys(searchObj);
    for (i = 0; i < toaletter.length; i++) {
        var truthChecker = [];
        for (x = 0; x < searchParam; x++) {
            if (toaletter[i][searchParam[x]] == searchObj[searchParam[x]]) {
                truthChecker.push(true);
            }
            if (truthChecker.length == searchParam.length) {
                searchResults.push(toaletter[i]);
            }
        }
    }
    var src = document.getElementById('søk');
    src.addEventListener('click', function () {
        console.log(searchResults);
    });
}
})










