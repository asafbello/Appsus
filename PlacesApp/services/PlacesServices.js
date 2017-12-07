

var places = [
    {
        fullAdress: 'habonim',
        name: 'home',
        description: 'blalbla',
        id: '05151',
        img: '',
        lat: 35,
        lng: 45,
        tag: 'fun'
    },
    {
        fullAdress: 'tel-aviv',
        name: 'pull',
        description: 'blalbla',
        id: '4151',
        img: '',
        lat: 55,
        lng: 45,
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
    if (!lat) lat = 32.0749831;
    if (!lng) lng = 34.9120554;

    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: { lat: lat, lng: lng },
            zoom: 15
        }
    );
    var marker = new google.maps.Marker({
        position: { lat: lat, lng: lng },
        map: map,
        title: 'Hello World!'
    });

}
export default {
    places,
    initMap,
    hendelSerch,
    createPlace,
    getPlaces,
    updatePlace
}