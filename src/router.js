/*global Vue*/
import Router from 'vue-router'
import Login from '@/components/login'

Vue.use(Router)

export const router = new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: Login
    }]
})