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


//Javascript til toalett kartet

    function initMap() {
        var options = {
            zoom: 13,
            center: {lat: 60.389772, lng: 5.331281}
        }
        var map = new
        google.maps.Map(document.getElementById('map'), options);

        for (var x in dassen) {
            var bul = dassen[x];
            var loc = new google.maps.LatLng(bul.latitude,bul.longitude);
            var marker = new google.maps.Marker({
                position: loc ,
                title: bul.plassering

                ,
                map: map
            });

        }
    }















