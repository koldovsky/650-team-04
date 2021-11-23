let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.24370386673566, lng: -124.12372515961287 },
    zoom: 4,
  });
}
