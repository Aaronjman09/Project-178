mapboxgl.accessToken = "pk.eyJ1IjoiYWFyb25qbSIsImEiOiJjbG5rd2Y4aGIxdHMyMm1yaW41YWMzbmhnIn0.1_zMEdhcvyF80PQhdzcWHg"
var map = new mapboxgl.Map({
    container : "map",
    style : "mapbox://styles/mapbox/streets-v11",
    center : [-75.80377870129075, 39.98227335729346],
    zoom : 16
})
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions : {enableHighAccuracy: true},
        trackUserLocation: true
    })
)