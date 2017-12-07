import PlacesServices from '../services/PlacesServices.js'

import EventBus from '../services/EventBus.js';

export default {

    template: `
                <section class="placeDetails">
            <h1>place details</h1>
            {{placeToShow.name}} </br>
            {{placeToShow. description}} </br>
           <img :src="placeToShow.img"></br>
            {{placeToShow.tag}}</br>
                </section>
                `,
    data() {
        return {
            placeToShow: {}
        }
    },

    created() {
        EventBus.$on('show-details', place => {
            this.placeToShow = place
       })
    },

    methods: {
    }
}
