import HomePage from './pages/HomePage.js'
import NoteDetailsPage from './pages/NoteDetailsPage.js'
import NoteEditPage from './pages/NoteEditPage.js'


const routes = [
    {
        path: '/MrKeeper',
        component: HomePage
    },
    {
        path: '/MrKeeper/details/:id',
        component: NoteDetailsPage
    },
    {
        path: '/MrKeeper/note/create',
        component: NoteEditPage
    },
    {
        path: '/MrKeeper/details/:id/edit',
        component: NoteEditPage
    },

];

export default routes;