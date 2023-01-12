import { createStore } from 'vuex'

export default createStore({
  state: {
    testimonials:[
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

  },
  getters: {
    
  },
  mutations: {
  },
  actions: {
    getTestimonial(){
      this.testimonials=JSON.parse(localStorage.getItem('testimonials'))
    }
  },
  modules: {
  }
})
