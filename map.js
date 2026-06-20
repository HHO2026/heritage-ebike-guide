var map = L.map('map').setView(
[41.3456,-88.8426],
13
);


L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'OpenStreetMap'
}

).addTo(map);



L.marker(
[41.3456,-88.8426]
)

.addTo(map)

.bindPopup(
"🚲 Heritage Harbor E-Bike Pickup"
);



// FIND LOCATION BUTTON

var userMarker;



document.getElementById("locateBtn")
.onclick = function(){


map.locate({

setView:true,

watch:true,

enableHighAccuracy:true

});


};




// WHEN LOCATION FOUND

map.on(
'locationfound',

function(e){


if(userMarker){

userMarker.setLatLng(e.latlng);

}

else{


userMarker = L.marker(
e.latlng
)

.addTo(map)

.bindPopup(
"📍 You are here"
);


}



}
);




// IF LOCATION FAILS

map.on(

'locationerror',

function(){

alert(
"Please allow location access to use this feature."
);

}

);
