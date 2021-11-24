import { createWebHistory,createRouter } from "vue-router";
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Display from './components/Display.vue'
import Update from './components/Update.vue'
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
    },
    {
        name:'Register',
        path:'/Register',
        component:Register
    },
    {
        name:'Display',
        path:'/Display',
        component:Display
    },
    {
        name:'Update',
        path:'/Update',
        component:Update
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router