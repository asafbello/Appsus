'use strict'
import myRoutes from './routes.js'
import miskipper from './vue-misterKeeper/main.js'


Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })



new Vue({
    template: `
        <section>
        <div class = "header-wrapper">
    <router-link to="/" exact><img src="https://png.icons8.com/home/dusk/69/000000"></router-link>
    <router-link to="/PlacesApp" exact><img src="https://png.icons8.com/location/office/69/000000"></router-link>
    <router-link to="/EmailsApp" exact><img src="https://png.icons8.com/gmail/nolan/69/000000"></router-link>
    <router-link to="/MrKeeper" exact><img src="https://png.icons8.com/edit-property/color/69/000000"></router-link>
        </div>
                <router-view></router-view>
        </section>
    `,





    router: myRouter,
    methods: {

    },
    components: {
        miskipper
    }
}).$mount('#app')