import PlacesServices from '../services/PlacesServices.js'




export default {

    template: `
        <section class="placesList">
        <h1>my places:</h1>
        <ul>
        <li v-for="place in places" @click="showLocation(place)">
        {{place.fullAdress}} <br>
        {{place.name}} <br>
        {{place.tag}} <br>
        </li>
        </ul>
      </section>
        `,
        data() {
            return {
            places : [],
            }
        },
    created() {
        debugger;
        PlacesServices.getPlaces()
            .then(places => {
                // var userMsg = {txt: 'Cars Loaded', type: 'success' }
                // this.showUserMsg(userMsg);
                this.places = places
            })
            .catch(err => {
                // var userMsg = {txt: 'Cars Loaded Failed!', type: 'danger' }
                // this.showUserMsg(userMsg);
                this.places = []
            })
    },
    methods: {
        showLocation(place) {
            console.log(' showLocation is on')
            PlacesServices.initMap(place.lat, place.lng)
        }
    }
}
