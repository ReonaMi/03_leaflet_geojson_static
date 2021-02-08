// setview latitude longitude & setzoom view 
let mymap = L.map('mymap').setView([-6.892659, 112.051369], 11);

// set tile layer 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.geoJSON(merakurak, {
    style: function(feature){
        return {color: feature.properties.color};
    }
}).bindPopup(function(layer){
    return layer.feature.properties.description;
}).addTo(mymap);

L.geoJSON(parengan, {
    style: function(feature){
        return {color: feature.properties.color};
    }
}).bindPopup(function(layer){
    return layer.feature.properties.description;
}).addTo(mymap);