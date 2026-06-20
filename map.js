var map = L.map('map').setView(
[41.3456,-88.8426],
13
);


L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
)
.addTo(map);



L.marker(
[41.3456,-88.8426]
)
.addTo(map)

.bindPopup(
"Heritage Harbor E-Bike Pickup"
);



L.marker(
[41.322,-88.990]
)

.addTo(map)

.bindPopup(

"Starved Rock Adventure"

);
