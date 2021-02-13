import { createApp } from 'vue'

import App from './App.vue'
import './assets/main.css'
import router from './router'
import { p_fireauth } from './firebase/config.js'

let app;

p_fireauth.onAuthStateChanged(()=>{
    if(!app){

        app = createApp(App)
        .use(router)
        .mount('#app')

    }

})


