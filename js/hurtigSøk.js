
'use strict';
(window.onload = function () {

    document.getElementById("kjaptsøk").addEventListener("click", sokDatasett);


    function sokDatasett() {

        document.getElementById("sokList").innerHTML = "";
        var rasktsok = document.getElementById("rasktsok").value;
        var result = [];

        for (var i in dassen) {

            if (dassen[i].plassering.toLowerCase().indexOf(rasktsok.toLowerCase()) >-1) {
                result.push(dassen[i]);
            }
        }
        visDass(result);
    }

    function visDass(dass){
        var sokList = document.getElementById("sokList");

        if(dass.length<1){
            var div = document.createElement("div");
            var p = document.createElement("p");
            p.textContent = "Ingen treff på søket ditt";
            div.appendChild(p);
            sokList.appendChild(div);

        }else{
            dass.forEach(function (dassen) {

                var div = document.createElement("div");
                var p = document.createElement("p");
                var longitude = document.createElement("p");
                var latitude = document.createElement("p");


                p.textContent = dassen.plassering;
                longitude.textContent = dassen.longitude;
                latitude.textContent = dassen.latitude;




                div.appendChild(p);
                div.appendChild(longitude);
                div.appendChild(latitude);

                sokList.appendChild(div);


            });
        }
    }

} )



