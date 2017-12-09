import PlacesServices from '../services/PlacesServices.js'
import EventBus from '../services/EventBus.js';



export default {

    template: `
        <section class="placesList">
        <nav class="panel">
        <p class="panel-heading">
        My places
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="text" placeholder="search">
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
          </p>
        </div>
       
        <a class="panel-block is-active" v-for="place in places" @click="showDetails(place)">
            {{place.fullAdress}} <br>
            {{place.name}} <br>
            {{place.tag}} <br>
            <figure class="image is-128x128">
            <img :src="place.img">
            </figure>
            <div>
                <button @click="showDetails(place)"><i class="fa fa-eye" aria-hidden="true"></i></button> 
                <button @click="editDetails(place)"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                <button @click="deletePlace(place)"><i class="fa fa-trash" aria-hidden="true"></i></button> 
          </div>
        </a>
        <div class="panel-block">
          <button class="button is-link is-outlined is-fullwidth">
            reset all filters
          </button>
        </div>
      </nav>
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


/* <h1>my places:</h1>
<ul>
<li v-for="place in places">
<button @click="showDetails(place)">show details</button> <br>
<button @click="editDetails(place)">edit details</button> <br>
<button @click="deletePlace(place)">delete place</button> <br>
{{place.fullAdress}} <br>
{{place.name}} <br>
{{place.tag}} <br>
</li>
</ul> */
