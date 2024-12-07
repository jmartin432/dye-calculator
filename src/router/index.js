import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ArtistsView from '../views/ArtistsView.vue'
import StudiosView from '../views/StudiosView.vue'
import ContactView from '../views/ContactView.vue'
import WorkshopsView from '../views/WorkshopsView.vue'
import EventsView from '../views/EventsView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/studios',
            name: 'studios',
            component: StudiosView
        },
        {
            path: '/artists',
            name: 'artists',
            component: ArtistsView
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactView
        },
        {
            path: '/workshops',
            name: 'workshops',
            component: WorkshopsView
        },
        {
            path: '/events',
            name: 'events',
            component: EventsView
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return {top: 0}
    }
})

export default router
