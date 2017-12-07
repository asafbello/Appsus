

var places = [
    {
        name: 'home',
        description: 'blalbla',
        id: '05151',
        img: '',
        lat: 35,
        lng: 45,
        tag: 'fun'
    },
    {
        name: 'pull',
        description: 'blalbla',
        id: '05151',
        img: '',
        lat: 55,
        lng: 45,
        tag: 'fun'
    }
]


function hendelSerch(adress) {


    console.log(adress)
    var prmInput = fetch(` https://maps.googleapis.com/maps/api/geocode/json?address=${adress}&key=AIzaSyAufh21vdBWzVYOdQLqwFhD-EpzWb7U7Ds`);


    prmInput
        .then(res => {
            return res.json();
        })
        .then(data => {

           
            var lat = data.results[0].geometry.location.lat;
            var lng = data.results[0].geometry.location.lng;
            initMap(lat, lng)
            //setAdressByCord(lat, lng)
            // setWeatherByCord(lat, lng)
            //  initMap(lat, lng)
            return data;
        })

        return prmInput;
        
        
}

/////////todo//////////
// function createPlace {
    
// }

// function deletePlace {

// }









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
    hendelSerch
}