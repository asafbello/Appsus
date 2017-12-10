import PlacesServices from '../services/PlacesServices.js'

import EventBus from '../services/EventBus.js';

export default {

  template: `
                <section class="placeDetails">

            <div class="box" >
            <article class="media">
              <div class="media-left">
              <div class="detailsBox">
                <figure class="image is-256x256">
                <img class="img-list" :src="placeToShow.img">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{placeToShow.name}}</strong> 
                    <br>
                    adress:  {{placeToShow.fullAdress}}<br> 
                    {{placeToShow. description}} 
                  </p>
                  </div>
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                  <a class="level-item">
                  <span class="icon is-small"></i>
                  </i></span>
                </a>
                   
                  </div>
                </nav>
              </div>
            </article>
          </div>
          
                </section>
                `,
  data() {
    return {
      placeToShow: PlacesServices.getCoverPlace(),
      // active: false
    }
  },

  created() {
    // this.placeToShow = getCoverPlace()
    EventBus.$on('show-details', place => {
      this.placeToShow = place
    })
  },


  methods: {
  }
}


