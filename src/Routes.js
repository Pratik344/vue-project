import { createWebHistory,createRouter } from "vue-router";
import Home from './components/Home.vue'
import Login from './components/Login.vue'
const routes=[
    {
        name:'Home',
        path:'/',
        component:Home
    },
    {
        name:'Login',
        path:'/Login',
        component:Login
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router