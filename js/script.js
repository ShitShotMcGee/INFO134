//Javascript tilhørende Slideshow. Laget av Wiz005
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length){slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 5000);
}


function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat:60.391011 , lng:5.325950},
        zoom: 14
    });

    for (var i = 0 ; i < toaletter.length;  i++) {
        var data = toaletter[i],
            latLng = new google.maps.LatLng(data.latitude, data.longitude);

        //Creating a marker and putting it on the map
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,

        });
    }
}
















