import HomePage from './pages/HomePage.js'
import miskipper from './vue-misterKeeper/main.js'
import EmailsApp from './EmailsApp/main.js'
import mainPlaces from './PlacesApp/mainPlaces.js'


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
    {
    path: '/PlacesApp',
    component: mainPlaces
    },
 

];

export default routes;