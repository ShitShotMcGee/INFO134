'use strict';
(window.onload = function(){

    document.getElementById('avansert_søk').addEventListener('submit', function(evt) {
        evt.preventDefault();

        document.getElementById("avansertSok").innerHTML = "";

        var form = document.getElementById("avansert_søk").elements;
        var result[];
        var kjonn = form[1].value;
        var rullestol = form[2].value;
        //var aapen = form[3].value;
        var klokkeslett = form[3].value;
        var stellerom = form[5].value;
        var maxpris = form[6].value;
        //var gratis = form[7].value;

        for (var i in dassen) {
            var save = false;
            if (kjonn && dassen[i].herre.toLocaleLowerCase().indexOf(herre.toLocaleLowerCase() > -1) || kjonn && dassen[i].dame.toLocaleLowerCase().indexOf(dame.toLocaleLowerCase()) > -1) {
                save = true;
                if (rullestol) save = sjekkRullestol(dassen[i].rullestol, rullestol);
                if (klokkeslett) save = sjekkKlokkeslett(dassen[i].tid_hverdag, klokkeslett);
                if (stellerom) save = sjekkStellerom(dassen[i].stellerom, stellerom);
                if (maxpris) save = sjekkMaxpris(dassen[i].pris, maxpris);
            } else {
                if (rullestol && dassen[i].rullestol.toLocaleLowerCase().indexOf(herre.toLocaleLowerCase()) > -1) {
                    save = true;
                    if (klokkeslett) save = sjekkKlokkeslett(dassen[i].tid_hverdag, klokkeslett);
                    if (stellerom) save = sjekkStellerom(dassen[i].stellerom, stellerom);
                    if (maxpris) save = sjekkMaxpris(dassen[i].pris, maxpris);

                } else {
                    if (klokkeslett && dassen[i].tid_hverdag.toLocaleLowerCase().indexOf(herre.toLocaleLowerCase()) > -1) {
                        save = true;
                        if (stellerom) save = sjekkStellerom(dassen[i].stellerom, stellerom);
                        if (maxpris) save = sjekkMaxpris(dassen[i].pris, maxpris);

                    } else {
                        if (stellerom && dassen[i].stellerom.toLocaleLowerCase().indexOf(herre.toLocaleLowerCase()) > -1) {
                            save = true;
                            if (maxpris) save = sjekkMaxpris(dassen[i].pris, maxpris);


                        } else {
                            if (maxpris && dassen[i].pris.toLocaleLowerCase().indexOf(herre.toLocaleLowerCase()) > -1) {
                                save = true;

                            }
                        }
                    }
                }
            }
            if (save) {
                result.push(dassen[i]);
            }
        }
        visDo(result);
    });

    function sjekkRullestol(dass,rullestol){
        if([dass.rullestol]){
        return (dass.rullestol.toLocaleLowerCase().indexOf(rullestol.toLocaleLowerCase())>-1)

        }else{
            return false;
        }
    }

    function sjekkKlokkeslett(dass, klokkeslett) {
        if(dassen[dass.tid_hverdag]){
            (dass.tid_hverdag.toLocaleLowerCase().indexOf(klokkeslett.toLocaleLowerCase())>1)

        }else{
            return false;
        }

    }
        function sjekkStellerom(dass, stellerom) {
            if(dassen[dass.stellerom]){
                (dass.stellerom.toLocaleLowerCase().indexOf(stellerom.toLocaleLowerCase())>1)

            }else{
                return false;
            }

        }
        function sjekkMaxpris(dass, pris) {
            if(dassen[dass.pris]){
                (dass.pris.toLocaleLowerCase().indexOf(pris.toLocaleLowerCase())>1)

            }else{
                return false;
            }

        }
        function visDo(dass){
            var avansertSok = document.getElementById("avansertSok");

            if(dass.length<1){
                var div = document.createElement("div");
                var p = document.createElement("p");
                p.textContent = "Ingen treff på søket ditt";
                div.appendChild(p);
                avansertSok.appendChild(div);

            }else{
                dass.forEach(function (dassen) {

                    var div = document.createElement("div");
                    var p = document.createElement("p");


                    p.textContent = dassen.plassering;

                    div.appendChild(p);

                    sokList.appendChild(div);


                });
            }
        }
    }






















)