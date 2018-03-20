(window.onload = function(){
document.getElementById('avansert_søk').addEventListener('submit', function(evt) {
    evt.preventDefault();

function Sok(herre, dame, rullestol, aapen, stellerom, gratis, klokkeslett, makspris){
    this.herre = herre;
    this.dame = dame;
    this.rullestol = rullestol;
    this.aapen = aapen;
    this.stellerom = stellerom;
    this.gratis = gratis;
    this.klokkeslett = klokkeslett;
    this.makspris = makspris;
}


    /*
    var skjekkHerre = document.getElementById(herre).checked;
    var skjekkDame = document.getElementById(dame).checked;
    var skjekkRullestol = document.getElementById(rullestol).checked;
    var skjekkAapen = document.getElementById(aapen).checked;
    var skjekkStellerom = document.getElementById(stellerom).checked;
    var skjekkGratis = document.getElementById(gratis).checked;
    var skjekkKlokkeslett = document.getElementById(klokkeslett).value;
    var skjekkMakspris = document.getElementById(makspris).value;t
    */

    function skjekkHerre(toalett, herre) {
        if (document.getElementById(herre).checked){

            console.log("Dette funket");
        }else{

            console.log("Dette funket ikke");
        }
    }

}
)})