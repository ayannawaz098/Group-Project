
var marker = L.marker([28.3949, 84.1240], {
    draggable: true
}).addTo(map);

var marker = L.marker([28.3949, 84.1240], {
    draggable: true
}).addTo(map);

var myIcon = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var marker = L.marker([28.3949, 84.1240], {
    icon: myIcon,
    draggable: true
}).addTo(map);