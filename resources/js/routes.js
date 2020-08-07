import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
        }
    ]
})

router.beforeEach((to, from, next) => {
    if(to.path == '/login' && localStorage.getItem('jwt') !== null){
        next({name: 'dashboard'});
    } else if (to.path == '/dashboard' && localStorage.getItem('jwt') === null){
    next({name: 'login'});
    } else {
    next();
    }  
})

export default router;