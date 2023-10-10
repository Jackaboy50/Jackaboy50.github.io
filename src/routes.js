import {createRouter, createWebHistory} from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home, props: true, alias: '/home'},
        {path: '/Home', component: Home, props: true},
        {path: '/Portfolio', component: Portfolio, props: true},
        {path: '/About', component: About, props: true},
        {path: '/Contact', component: Contact, props: true}
    ]
})

export default router