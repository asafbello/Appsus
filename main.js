'use strict'
import myRoutes from './routes.js'
import miskipper from './vue-misterKeeper/main.js'
import EmailsApp from './EmailsApp/main.js'


Vue.use(VueRouter);
const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    template: `
        <section>
                <h1>My App</h1> 
                <nav>
                <router-link to="/" exact class="button is-dark">home </router-link>
                    <router-link to="/MrKeeper" exact class="button is-dark">mr keeper </router-link>
                    <router-link to="/EmailsApp" exact class="button is-dark">EmailsApp </router-link>
                </nav>
                <router-view></router-view>
        </section>
    `,




    
    router: myRouter,
    methods: {
               
    },
    components: {
        miskipper,
        EmailsApp
    }
}).$mount('#app')