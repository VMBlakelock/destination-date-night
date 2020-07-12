// assistance from mentor

function getDate() {
    let act = document.getElementById("activities");
    let act_result = act.options[act.selectedIndex].value;
}

function getDate() {
    let city = document.getElementById("cities");
    let city_result = city.options[city.selectedIndex].value;
}






// code from google maps platform

function initMap() {
  // The location of Uluru
  let uluru = {lat: -25.344, lng: 131.036};
  // The map, centered at Uluru
  let map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  let marker = new google.maps.Marker({position: uluru, map: map});
}