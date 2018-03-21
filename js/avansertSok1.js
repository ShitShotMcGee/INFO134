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
    herre: "",
    dame: "",
    rulllestol: "",
    stellerom: "",
    aapen: "",
    gratis: ""
};
var skjekkHerre = document.getElementById('herre');
var skjekkDame = document.getElementById('dame');
var skjekkRullestol = document.getElementById('rullestol');
var skjekkStellerom = document.getElementById('stellerom');
var skjekkAapen = document.getElementById('aapen');
var skjekkGratis = document.getElementById('gratis');

skjekkHerre.addEventListener('click', function () {
    if (skjekkHerre.checked) {
        
    } else {
        return false;
    }
})






