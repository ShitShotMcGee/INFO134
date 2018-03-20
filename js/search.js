

'use strict';
(window.onload = function(){

    document.getElementById("sokBtn").addEventListener("click", searchDataBase);
    document.getElementById("avansertSok").addEventListener("click", goToAvansertSok);


    function goToAvansertSok(){
        window.location.href = "advanced_search.html";
    }

    function searchDataBase(){

        document.getElementById("sokList").innerHTML = "";
        var sokValue = document.getElementById("sokValue").value;
        var result = [];

        for(var i in movies_object){

            if(movies_object[i].otitle.toLowerCase().indexOf(sokValue.toLowerCase())>-1){
                result.push(movies_object[i]);
            }
        }

        showFoundedMovies(result);
    }


    function showFoundedMovies(movies){
        var sokList = document.getElementById("sokList");

        if(movies.length<1){
            var div = document.createElement("div");
            var p = document.createElement("p");
            p.textContent = "Ingen treff på søket ditt";
            div.appendChild(p);
            sokList.appendChild(div);

        }else{
            movies.forEach(function (movie) {

                var div = document.createElement("div");
                var p = document.createElement("p");

                p.addEventListener("click", goToMovie.bind(this, movie), false);

                p.textContent = movie.otitle;

                div.appendChild(p);

                sokList.appendChild(div);


            });
        }
    }

    function goToMovie(movie){
        window.location.href = "show_movie.html?id=" + movie.id;
    }


})();


