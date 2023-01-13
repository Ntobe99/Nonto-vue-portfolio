import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
 

let testimonials=[
   {details:'Asandile langeni',
    message:'',
    image:''},
   {details:'Asandile langeni',
    message:'',
    image:''},
   {details:'Asandile langeni',
    message:'',
    image:''},
   {details:'Asandile langeni',
    message:'',
    image:''},
   {details:'Asandile langeni',
    message:'',
    image:''}
]
 localStorage.setItem('testimonials',JSON.stringify(testimonials));
let projects=[
   {},
   {},
   {},
   {},
   {},
   {}
]
 localStorage.setItem('projects',JSON.stringify(projects));
 
