function initMap() {
    var uluru = { lat: 26.858287, lng: 80.9945893 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}