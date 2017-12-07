
import PlacesServices from './services/PlacesServices.js'
import initMap from './services/PlacesServices.js'
import hendelSerch from './services/PlacesServices.js'
import MyPlaces from './cmp/MyPlaces.js'


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
             <button v-on:click="savePlace">save</button>
             {{placeData}}
            </container>
        </section>
    `,
    data() {
        return {
            searchTxt: '',
            placeData: {}
        }
    },

    methods: {
        searchPlace() {
            console.log(this.searchTxt)
            hendelSerch.hendelSerch(this.searchTxt)
               // .then(res => res.json())
                //.then(res => console.log("************", res))
            
        },

        savePlace() {

        }


    },
    mounted() {
        PlacesServices.initMap();
    },
    components: {
        MyPlaces
    }




}