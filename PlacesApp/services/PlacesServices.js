
var placesCopy = [];
var places = [
    {
        fullAdress: 'hacotel-hamaravi jerusalem ',
        name: 'hacotel-hamaravi',
        description: 'the  holyest place in the world',
        id: '05151',
        img: "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512669030/hacotel_xzk6hc.jpg",
        lat: 31.783791,
        lng: 35.2345085,
        tag: 'culture'
    },
    {
        fullAdress: 'jaffa street Jerusalem',
        name: 'machne yehuda market',
        description: 'A wonderful market with all the special produce of the country and especially from the villages around Jerusalem ',
        id: '4151',
        img: "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512669025/machane_edueba.jpg",
        lat: 31.764109,
        lng: 35.213664,
        tag: 'food'
    },
    {
        fullAdress: 'old city Jerusalem',
        name: 'Tower of David',
        description: 'ancient citadel located near the Jaffa Gate entrance to western edge of the Old City of Jerusalem. ',
        id: '4189',
        img: "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512859058/d_oke6pg.jpg",
        lat: 31.7763531,
        lng: 35.228413,
        tag: 'culture'
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
            return data;
        })
}

function filterByTxt(searchedTerm) {
    placesCopy = [];
    places.forEach(place => {
        if ((place.name.toLowerCase()).includes(searchedTerm)) {
            placesCopy.push(place)
        }
    })
    return Promise.resolve(placesCopy);
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

function getCoverPlace() {
    return places[0]
}


function updatePlace(place) {
    return new Promise((resolve, reject) => {
        if (place.id) {
            var placeToUpdateIdx = places.findIndex(currPlace => currPlace.id === place.id)
            places.splice(placeToUpdateIdx, 1, place);
        }

    });
}

function deletePlace(place) {
    var placeToUpdateIdx = places.findIndex(currPlace => currPlace.id === place.id)
    places.splice(placeToUpdateIdx, 1);
    initMap()
}




function initMap(lat, lng, zoom) {
    if (!lat) lat = 31.7767189;
    if (!lng) lng = 35.2345085;
    if (!zoom) zoom = 13;

    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: { lat: lat, lng: lng },
            zoom: zoom,
        }
    );


    var contentString = `<div id="content">
        <div id="siteNotice">
        <h1>blabla</h1>
        </div> 
       </div>`;


    var infowindow = new google.maps.InfoWindow({
        content: contentString

    });

    var icons = {
        food: {
            icon: 'https://png.icons8.com/color/30/porridge.png'
        },
        fun: {
            icon: 'https://png.icons8.com/color/24/theatre-mask.png'
        },
        culture: {
            icon: 'https://png.icons8.com/color/30/theatre-mask.png'
        },
        sport: {
            icon: "https://png.icons8.com/running-filled/ios7/48/000000"
        },
        pointer: {
            icon: "https://png.icons8.com/map-pin/color/48/000000"
        }
    };

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        icon: icons.pointer.icon,
        map: map,
        title: 'my place'
    });

    places.forEach(function (feature) {
        var iconUrl = (icons[feature.tag].icon);
        var infowindow = new google.maps.InfoWindow({
            content: feature.name + '<br>' + '  description: ' + feature.description
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(feature.lat, feature.lng),
            icon: iconUrl || icons[0].icon,
            map: map,
            title: feature.name,

        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });
    });

}

function getMyLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                resolve({
                    lat: coords.latitude,
                    lng: coords.longitude
                })
            })
        }
    })
}



function setAdressByCord(lat, lng) {
    return fetch(` https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDBa2XUIja_rS8DgY8RIUYSwbB8gu4x7M0`)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            var adress = data.results[0].formatted_address;
            return adress
        })
}

export default {
    places,
    initMap,
    hendelSerch,
    createPlace,
    getPlaces,
    updatePlace,
    deletePlace,
    getCoverPlace,
    getMyLocation,
    filterByTxt,
    setAdressByCord
}