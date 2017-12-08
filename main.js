'use strict'
import myRoutes from './routes.js'
import miskipper from './vue-misterKeeper/main.js'


Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })



new Vue({
    template: `
        <section>
        <div class = "header-wrapper">
        <router-link to="/" exact> <object data="your.svg" type="image/svg+xml" >
        <img src="icons/home.svg"  />
    </object></router-link> 

<router-link to="/PlacesApp" exact> <object data="your.svg" type="image/svg+xml">
      <img src="icons/location-pin.svg" />
</object></router-link>

<router-link to="/EmailsApp" exact> <object data="your.svg" type="image/svg+xml">
      <img src="icons/mail.svg"  />
</object></router-link>

<router-link to="/MrKeeper" exact></object>
  <object data="your.svg" type="image/svg+xml">
  <img src="icons/pencil.svg"  />
</object></router-link>
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