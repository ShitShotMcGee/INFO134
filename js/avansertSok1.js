(window.onload = function () {
    document.getElementById('søk').addEventListener('submit', function (evt) {
        evt.preventDefault();
        /*
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
        */


        var skjekk = document.getElementById('herre');

        skjekk.addEventListener('click', function skjekk2(toalett.toaletter) {
            if (skjekk.checked) {
                console.log('woop');
            } else {
                console.log('buu');
            }
        })

    }
}



