

var places = [
    {
        fullAdress: 'hacotel-hamaravi jerusalem ',
        name: 'hacotel',
        description: 'the  holyest place in the world',
        id: '05151',
        img: "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512669030/hacotel_xzk6hc.jpg",
        lat: 31.783791,
        lng: 35.2345085,
        tag: 'fun'
    },
    {
        fullAdress: 'machne yehuda market',
        name: 'sreet view',
        description: 'A wonderful market with all the special produce of the country and especially from the villages around Jerusalem ',
        id: '4151',
        img: "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512669025/machane_edueba.jpg",
        lat: 31.764109,
        lng: 35.213664,
        tag: 'fun'
    }
]

const BASE_URL = "https://maps.googleapis.com/maps/api/geocode/json";
const KEY = "AIzaSyAufh21vdBWzVYOdQLqwFhD-EpzWb7U7Ds";

function hendelSerch(adress) {


    console.log(adress)
    return fetch(`${BASE_URL}?address=${adress}&key=${KEY}`)
        .then(res => res.json())
        .then(data => {
            if (!data.results || data.results.length === 0) return null;
            var lat = data.results[0].geometry.location.lat;
            var lng = data.results[0].geometry.location.lng;
            initMap(lat, lng)
            //setAdressByCord(lat, lng)
            // setWeatherByCord(lat, lng)
            return data;
        })
}


function createPlace(rowPlace) {

    return new Promise((resolve, reject) => {
        try {
            places.push(rowPlace)
            resolve(true);
        } catch (err) {
            reject(err);
        }
    });
}

function getPlaces() {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(places) }, 500)
    });
}

function getPlaceById(placeId) {
    return c
}


// function deletePlace {

// }

function updatePlace(place) {
    return new Promise((resolve, reject) => {
        if (place.id) {
            var placeToUpdateIdx = places.findIndex(currPlace => currPlace.id === place.id)
            places.splice(placeToUpdateIdx, 1, place);
        }
        // resolve(place)

    });
}






function initMap(lat, lng) {
    if (!lat) lat = 31.7767189;
    if (!lng) lng = 35.2345085;

    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: { lat: lat, lng: lng },
            zoom: 13
        }
    );
   
    var marker, i;

    for (i = 0; i < places.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(places[i].lat, places[i].lng),
            map: map

        });
    }
    marker = new google.maps.Marker({
        position: new google.maps.LatLng( lat,lng ),
        map: map
    
    }) 
}
// var marker = new google.maps.Marker({
//     position: { lat: lat, lng: lng },
//     map: map,
//     title: 'Hello World!'

//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10,
//     center: new google.maps.LatLng(-33.92, 151.25),
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   var infowindow = new google.maps.InfoWindow();




export default {
    places,
    initMap,
    hendelSerch,
    createPlace,
    getPlaces,
    updatePlace
}