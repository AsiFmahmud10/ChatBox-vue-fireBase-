import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Chatroom from '../views/Chatroom.vue'
import {p_fireauth} from '../firebase/config.js'


const reqAuth = (to, from , next)=>{
let user = p_fireauth.currentUser

          if(!user){
            next({name:'Home'})
          }else{
            next()
          }
      
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chatroom',
    name: 'Chatroom',
    component: Chatroom,
    beforeEnter: reqAuth
  },
  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
