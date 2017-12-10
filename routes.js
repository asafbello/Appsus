import HomePage from './pages/HomePage.js'
import miskipper from './vue-misterKeeper/main.js'
import EmailsApp from './EmailsApp/EmailsApp.js'
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
        path: '/EmailsApp/',
        component: EmailsApp
    },
    {
        path: '/EmailsApp/:id',
        component: EmailsApp
    },
    {
        path: '/PlacesApp',
        component: mainPlaces
    }

];

export default routes;