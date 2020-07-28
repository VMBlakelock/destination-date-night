
let act_result ="";
let city_result ="";

function getDate(){
  let act = document.getElementById("activities");
  let act_result = act.options[act.selectedIndex].value;

  let city = document.getElementById("cities");
  let city_result = city.options[city.selectedIndex].value;

let destination ='';

// place date is going 

if (act_result === "dinner" && city_result === "manchester") {
    destination = "McDonald's in Manchester City Centre";
}

if (act_result === "dinner" && city_result === "leeds") {
    destination = "Nando's in Leeds City Centre";
}

if (act_result === "dinner" && city_result === "london") {
    destination = "Gordon Ramsay's Bread Street Kitchen in London";
}

if (act_result === "activity" && city_result === 'manchester') {
    destination = "Paint Balling in Manchester City Centre";
}

if (act_result === "activity" && city_result === "leeds") {
    destination = "To a Mud Race in Leeds City Centre";
}

if (act_result === "activity" && city_result === "london") {
    destination = "To play Indoor Crazy Golf in London";
}

if (act_result === "romance" && city_result === "manchester") {
    destination = "Poetry Corner at Manchester Metropolitan University";
}

if (act_result === "romance" && city_result === "leeds") {
    destination = " To the Drawing Club in Leeds City Centre";
}

if (act_result === "romance" && city_result === "manchester") {
    destination = " To the National History Museum in London";
}


document.getElementById("result").innerHTML = `You have chosen an ${act_result} in the city of ${city_result}`;

document.getElementById("destination").innerHTML = `Your going ${destination}`;


// google maps 


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 54.230956, lng: -8.9539 }
  });
new google.maps.Marker({position: myLatLng,
    map,
    title: "Hello World!"
  });
}
// code for obfuscated version of my api key - from tutor support Tim. https://github.com/Code-Institute-Org/key-helper

let API_KEY = "yourAPIkey";
console.log(API_KEY.keyHelper());
// Outputs "NehbllrxVC"
}