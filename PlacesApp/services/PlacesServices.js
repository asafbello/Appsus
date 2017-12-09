

var places = [
    {
        fullAdress: 'hacotel-hamaravi jerusalem ',
        name: 'hacotel-hamaravi',
        description: 'the  holyest place in the world',
        id: '05151',
        img: "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512669030/hacotel_xzk6hc.jpg",
        lat: 31.783791,
        lng: 35.2345085,
        tag: 'fun'
    },
    {
        fullAdress: 'jaffa street Jerusalem',
        name: 'machne yehuda market',
        description: 'A wonderful market with all the special produce of the country and especially from the villages around Jerusalem ',
        id: '4151',
        img: "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512669025/machane_edueba.jpg",
        lat: 31.764109,
        lng: 35.213664,
        tag: 'fun'
    },
    {
        fullAdress: 'old city Jerusalem',
        name: 'Tower of David',
        description: 'ancient citadel located near the Jaffa Gate entrance to western edge of the Old City of Jerusalem. ',
        id: '4189',
        img: "http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512859058/d_oke6pg.jpg",
        lat: 31.7763531,
        lng: 35.228413,
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

function getCoverPlace() {
    return places[0]
}




function updatePlace(place) {
    return new Promise((resolve, reject) => {
        if (place.id) {
            var placeToUpdateIdx = places.findIndex(currPlace => currPlace.id === place.id)
            places.splice(placeToUpdateIdx, 1, place);
        }
        // resolve(place)

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
    // var infowindow = new google.maps.InfoWindow();
    var map = new google.maps.Map(
        document.getElementById('map'),
        {
            center: { lat: lat, lng: lng },
            zoom: zoom,
            icon: image
        }
    );

    // function placeMarker( loc ) {
    //     var latLng = new google.maps.LatLng( loc[1], loc[2]);
    //     var marker = new google.maps.Marker({
    //       position : latLng,
    //       map      : map
    //     });
    //     google.maps.event.addListener(marker, 'click', function(){
    //         infowindow.close(); // Close previously opened infowindow
    //         infowindow.setContent( "<div id='infowindow'>"+ loc[0] +"</div>");
    //         infowindow.open(map, marker);
    //     });
    //   }
      
    //   // ITERATE ALL LOCATIONS
    //   // Don't create functions inside for loops
    //   // therefore refer to a previously created function
    //   // and pass your iterating location as argument value:
    //   for(var i=0; i<locations.length; i++) {
    //     placeMarker( locations[i] );
    //   }
    var contentString = `<div id="content">
        <div id="siteNotice">
        <h1>blabla</h1>
        </div> 
       </div>`;


    var infowindow = new google.maps.InfoWindow({
        content: contentString

    });
    var image = {
        //url: 'http://res.cloudinary.com/dxdmd1v1z/image/upload/v1512730948/11637-200_u6cynd.png' ,
        url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        // This marker is 20 pixels wide by 32 pixels high.
        size: new google.maps.Size(20, 32),
        // The origin for this image is (0, 0).
        origin: new google.maps.Point(0, 0),
        // The anchor for this image is the base of the flagpole at (0, 32).
        anchor: new google.maps.Point(0, 32)
    };

    var marker, i;

    for (i = 0; i < places.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(places[i].lat, places[i].lng),
            map: map,
            icon: image,
            title: places[i].name
        });
        marker.addListener('click', function() {
            infowindow.open(map, marker);
            console.log('open')
          });
       
    }
    // marker = new google.maps.Marker({
    //     position: new google.maps.LatLng(lat, lng),
    //     map: map

    // })
    // marker.addListener('click', function() {
    //     infowindow.open(map, marker);
    //     console.log('open')
    //   });
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
    updatePlace,
    deletePlace,
    getCoverPlace
}