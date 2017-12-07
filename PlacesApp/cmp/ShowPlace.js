import PlacesServices from '../services/PlacesServices.js'

import EventBus from '../services/EventBus.js';

export default {

    template: `
                <section class="placeDetails">
            <h1>place details</h1>
            {{placeToShow}}
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
