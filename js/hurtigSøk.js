function hurtigSøk() {
    var kjaptsok = document.getElementById("rasktsok").value;
    var result = [];
    var aapen = /(åpen)/i;
    var herre = /(herre)|(mann)|(gutt)/i;
    var dame = /(dame)|(kvinne)|(jente)/i;
    var rullestol = /(rullestol)|(handikapp)/i;
    var stellerom = /(stellerom)/i;
    var gratis = /(gratis)/i;


}


// 'use strict';
// (window.onload = function () {
//
//     document.getElementById("kjaptsøk").addEventListener("click", sokDatasett);
//
//
//     function sokDatasett() {
//
//         document.getElementById("sokList").innerHTML = "";
//         var rasktsok = document.getElementById("rasktsok").value;
//         var result = [];
//
//         for (var i in toaletter) {
//
//             if (toaletter[i].plassering.toLowerCase().indexOf(rasktsok.toLowerCase()) >-1) {
//                 result.push(toaletter[i]);
//             }
//         }
//         visDass(result);
//     }
//
//     function visDass(toalett){
//         var sokList = document.getElementById("sokList");
//
//         if(toalett.length<1){
//             var div = document.createElement("div");
//             var p = document.createElement("p");
//             p.textContent = "Ingen treff på søket ditt";
//             div.appendChild(p);
//             sokList.appendChild(div);
//
//         }else{
//             toalett.forEach(function (toaletter) {
//
//                 var div = document.createElement("div");
//                 var p = document.createElement("p");
//                 var longitude = document.createElement("p");
//                 var latitude = document.createElement("p");
//
//
//                 p.textContent = toaletter.plassering;
//                 longitude.textContent = toaletter.longitude;
//                 latitude.textContent = toaletter.latitude;
//
//
//
//
//                 div.appendChild(p);
//                 div.appendChild(longitude);
//                 div.appendChild(latitude);
//
//                 sokList.appendChild(div);
//
//
//             });
//         }
//     }
//
// } )
//
//
//
