import PlacesServices from '../services/PlacesServices.js'
import EventBus from '../services/EventBus.js';



export default {

    template: `
        <section class="placesList">
        <nav class="panel places-list-items">
        <p class="panel-heading">
        My places
        </p>
        <div class="panel-block">
          <p class="control has-icons-left">
            <input class="input is-small" type="text" v-model="searchedTerm" @input="searchPlace" placeholder="search">
            <span class="icon is-small is-left">
              <i class="fa fa-search"></i>
            </span>
          </p>
        </div>
      
        <a class="panel-block is-active" v-for="place in places" @click="showDetails(place)">
        <div class="details-content">
            <div class="placeName">
                <b>adress:{{place.fullAdress}}</b> 
                    {{place.name}} <hr />
                   <p class="place-tag">{{place.tag}} </p> 
            </div>
        <figure class="image is-128x128">
            <img :src="place.img">
            
            </figure>
            </div>
            <div>
                <img src="https://png.icons8.com/eye/ultraviolet/30/000000" @click="showDetails(place)">
                <img src="https://png.icons8.com/edit/ultraviolet/30/000000" @click="editDetails(place)">
                <img src="https://png.icons8.com/disposal/office/30/000000" @click="deletePlace(place)">
          </div>
          
        </a>
       
      </nav>
      </section>
        `,
    data() {
        return {
            places: [],
            searchedTerm:''

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
        },
        searchPlace() {
            console.log(this.searchedTerm)
            PlacesServices.filterByTxt(this.searchedTerm)
              .then(places => {
                this.places = places
              })
          },
    }
}
