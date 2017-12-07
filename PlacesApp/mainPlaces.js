
import PlacesServices from './services/PlacesServices.js'
import MyPlaces from './cmp/MyPlaces.js'
import EditPlaces from './cmp/EditPlaces.js'

export default {

    template: `
        <section class ="mainPlaces">
            <h1>my places</h1>
            <form @submit.prevent >
            <input type="text" v-model="searchTxt" autofocus>
            <button v-on:click="searchPlace">search</button>
            {{searchTxt}}
        </form> 
        <container class="mapSection>
             <div id="map" ></div>
             <MyPlaces class="MyPlaces"></MyPlaces>
             <button v-on:click="addPlace">add</button>
            </container>
            <EditPlaces></EditPlaces>
        </section>
    `,
    data() {
        return {
            searchTxt: '',
            placeData: {},
            placeToUpdate: {}
        }
    },

    methods: {
        searchPlace() {
            PlacesServices.hendelSerch(this.searchTxt)
                .then(data => this.placeData = data)
        },

        addPlace() {
            // createPlace.createPlace(this.placeData),
            this.placeToUpdate.fullAdress = (this.placeData.results[0].address_components[0].long_name) + ('  ') + (this.placeData.results[0].address_components[3].long_name);
            this.placeToUpdate.id = this.placeData.results[0].place_id
            this.placeToUpdate.lat = this.placeData.results[0].geometry.location.lat;
            this.placeToUpdate.lng = this.placeData.results[0].geometry.location.lng;
            PlacesServices.createPlace(this.placeToUpdate).then(msg => this.placeToUpdate = {}  );
            this.placeData ={}


        }
    },
    mounted() {
        PlacesServices.initMap();
    },

    components: {
        MyPlaces,
        EditPlaces
    }
}

