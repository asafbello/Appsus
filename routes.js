import HomePage from './pages/HomePage.js'
import miskipper from './vue-misterKeeper/main.js'
import EmailsApp from './EmailsApp/main.js'


const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/MrKeeper',
        component: miskipper
    },
    {
        path: '/EmailsApp',
        component: EmailsApp
    },



     
 
   

];

export default routes;