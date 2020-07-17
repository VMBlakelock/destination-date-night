// assistance from mentor 

function getDate() {
    let act = document.getElementById("activities");
    let act_result = act.options[act.selectedIndex].value;

    let city = document.getElementById("cities");
    let city_result = city.options[city.selectedIndex].value;
}

let destination ='';

// place date is going 

if (act_result === "dinner" && city_result === 'leeds') {
    destination = "Nando's in Leeds City Centre";
}
if (act_result === "dinner" && city_result === 'manchester') {
    destination = "McDonald's in Manchester City Centre";
}
if (act_result === "dinner" && city_result === 'london') {
    destination = "Gordon Ramsay's Bread Street Kitchen in London";
}

document.getElementById("result").innerHTML =
"You have chosen " + act_result + " activity " + " in the city of " + city_result;

document.getElementById("destination").innerHTML =
"Your going to " + destination;
