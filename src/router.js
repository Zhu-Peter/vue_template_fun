import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/VueHome.vue'
import Other from './views/VueOther.vue'

Vue.use(Router);

const router = new Router({
    // mode:history,
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Other',
            name: 'Other',
            component: Other
        }
    ]
});

export default router;