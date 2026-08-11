// Create map
var map = L.map('map').setView([28.3949, 84.1240], 5);

// OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:'© OpenStreetMap'
}).addTo(map);

// Draggable Marker
var marker = L.marker([28.3949,84.1240],{
    draggable:true
}).addTo(map);

let selectedCountry = "Unknown";

// When marker is moved
marker.on('dragend', function(e){

    var position = marker.getLatLng();

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lng}`)

    .then(response=>response.json())

    .then(data=>{

        selectedCountry = data.address.country;

        document.getElementById("country").innerHTML =
        "Selected Country: " + selectedCountry;

    });

});

// Save country
function saveLocation(){

    localStorage.setItem("country",selectedCountry);

    alert("Location Saved: " + selectedCountry);

}
// This variable is updated when the pin is moved
let selectedCountry = "";

// Detect the country when the marker is moved
marker.on("dragend", function () {

    let position = marker.getLatLng();

    fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${position.lat}&lon=${position.lng}`)
    .then(response => response.json())
    .then(data => {

        selectedCountry = data.address.country;

        document.getElementById("country").innerHTML =
            "Selected Country: " + selectedCountry;

    });

});


function confirmLocation() {

    localStorage.setItem("country", selectedCountry);

    alert("Location Saved!");

    window.location.href = "cheakout.html";

}