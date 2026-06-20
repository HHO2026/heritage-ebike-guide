var map = L.map('map').setView(
[41.3456, -88.8426],
13
);


L.tileLayer(
'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'OpenStreetMap'
}
)
.addTo(map);



L.marker(
[41.3456,-88.8426]
)
.addTo(map)

.bindPopup(
"Heritage Harbor E-Bike Pickup"
)

.openPopup();
