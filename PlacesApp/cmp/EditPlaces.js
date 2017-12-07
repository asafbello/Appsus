

export default {

    template: `
            <section class="editPlaces" >
            <input type="text" v-model="name" autofocus>
            <input type="text" v-model="description" >
            <input type="text" v-model="img" >
            <select v-model="selected">
            <option disabled value="">Please select one</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
          <span>Selected: {{ selected }}</span>
            <button v-on:click="searchPlace">search</button>
          </section>
            `,
    data() {
        return {

            fullAdress: '',
            name: '',
            description: '',
            id: '',
            img: '',
            lat: '',
            lng: '',
            tag: '',
            selected: ''
        }
    },
    created() {

    },
    methods: {

    }
}
    