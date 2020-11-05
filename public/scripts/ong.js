const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom:false,
    scroolWheelZoom:false,
    zoomControl: false
}

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


L.marker([-27.2058128,-49.6932565],{icon})
    .addTo(map)
  
    /*iamge gallery */

    function selectImage(event){
        // console.log(event.currentTarget)
        const button = event.currentTarget

        //******remover todas as classes .active dos botoes*******
        const buttons = document.querySelectorAll(".images button")
        button.forEach(removeAtiveClass)

        function removeAtiveClass(button){
            button.classList.remove("active")

        }

        //selecionar imageclicada
        const image = button.children[0]
        const imageContainer = document.querySelector(".ong-details img")

        //atualizar o container de image
        imageContainer.src = image.src

        //add a classe .active para este botao
        button.classList.add('active')

    
    }