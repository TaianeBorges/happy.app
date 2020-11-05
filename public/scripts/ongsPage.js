const map = L.map('mapid').setView([-27.222633,-49.6455874], 15);
// create and add Tile
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popuAnchor: [170, 2]

})

//create poppup Overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth:240,
    minHeight:240
}).setContent('lar da meninas <a href="ong.html?id=1" class="choose-ong"> <img src="./public/imgs/arrow-white.png"></a>')

L.marker([-27.2058128,-49.6932565],{icon})
    .addTo(map)
    .bindPopup(popup)
    .openPopup();