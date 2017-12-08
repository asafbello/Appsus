import PlacesServices from '../services/PlacesServices.js'
import EventBus from '../services/EventBus.js';



export default {

    template: `
        <section class="placesList">
        <h1>my places:</h1>
        <ul>
        <li v-for="place in places">
       <button @click="showDetails(place)">show details</button> <br>
       <button @click="editDetails(place)">edit details</button> <br>
       <button @click="deletePlace(place)">delete place</button> <br>
        {{place.fullAdress}} <br>
        {{place.name}} <br>
        {{place.tag}} <br>
        </li>
        </ul>
      </section>
        `,
    data() {
        return {
            places: [],
        }
    },
    created() {
        PlacesServices.getPlaces()
            .then(places => {
                this.places = places
            })
            .catch(err => {
                this.places = []
            })
    },
    methods: {
        showDetails(place) {
            PlacesServices.initMap(place.lat, place.lng ,16);
            EventBus.$emit('show-details', place);
        },
        editDetails(place) {
            this.$emit('editPlace', place);
        },
        deletePlace(place) {
            PlacesServices.deletePlace(place)
        }
    }
}
