import { createWebHistory,createRouter } from "vue-router";
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'
import Display from './components/Display.vue'
import Update from './components/Update.vue'
import itemList from './components/itemList.vue'
import Appointment from './components/Appointment.vue'
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
    },
    {
        name:'itemList',
        path:'/itemList',
        component:itemList
    },
    {
        name:'appointment',
        path:'/appointment',
        component:Appointment
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router