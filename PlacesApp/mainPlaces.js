
import PlacesServices from './services/PlacesServices.js'
import PlacesList from './cmp/PlacesList.js'
import EditPlaces from './cmp/EditPlaces.js'
import ShowPlace from './cmp/ShowPlace.js'

export default {

    template: `
    
    <section class ="mainPlaces">
        <div class="header">
            <div class ="searchBar">
                <div class="field is-grouped" >
                    <p class="control is-expanded">
                        <form @submit="searchPlace">
                            <input class="input" type="text" v-model="searchTxt"  placeholder="Search for a place" autofocus>
                        </form>
                    </p>
            <p class="control">
                <img src="https://png.icons8.com/search/color/30/000000"  @click="searchPlace">
                <img src="https://png.icons8.com/plus/ultraviolet/30/000000" @click="addPlace">
                <img src="https://png.icons8.com/marker/ultraviolet/30/000000" @click="getMyLocation">  
            </p>
                </div>
            </div>
        </div>
        <div class="mapSection">
            <div class="main-map-page">
                <div id="map" ></div>
                    <ShowPlace></ShowPlace>
                    <EditPlaces v-if="placeToEdit" :place="placeToEdit" @editPlace="editPlace"></EditPlaces>
                        </div>
                        <PlacesList class="PlacesList" @editPlace="editPlace" ></PlacesList>
        
        </div>
           
        </section>
    `,
    data() {
        return {
            searchTxt: '',
            placeData: {},
            placeToUpdate: {},
            placeToEdit: null
        }
    },
    props: [''],

    methods: {
        searchPlace() {
            PlacesServices.hendelSerch(this.searchTxt)
                .then(data => this.placeData = data)
        },

        addPlace() {
            console.log(this.placeData);
            this.placeToUpdate.fullAdress = (this.placeData.results[0].address_components[0].long_name) + ('  ')
            this.placeToUpdate.id = this.placeData.results[0].place_id
            this.placeToUpdate.lat = this.placeData.results[0].geometry.location.lat;
            this.placeToUpdate.lng = this.placeData.results[0].geometry.location.lng;
            this.placeToUpdate.tag = 'pointer';
            PlacesServices.createPlace(this.placeToUpdate).then(msg => this.placeToUpdate = {});
            this.placeData = {}

        },
        editPlace(place) {

            this.placeToEdit = place;
        },
        getMyLocation() {
            PlacesServices.getMyLocation()
                .then(loc => {
                    PlacesServices.setAdressByCord(loc.lat, loc.lng)
                        .then((data => {
                            this.searchTxt = data
                            this.searchPlace()
                        }))
                })
        }

    },
    mounted() {
        PlacesServices.initMap();
    },

    components: {
        PlacesList,
        EditPlaces,
        ShowPlace
    }
}


