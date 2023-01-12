<template>
    <div class="projects">
        <div class="col-sm-6">
              <div class="card" style="width: 500px;height: 490px;" v v-for="item in projects">
                <div class="card-body">
                    <img :src="item.image"  class="card-img-top" alt="...">
                  <h5 class="card-title">{{  }}</h5>
                  <div class="d-grid gap-2 col-6 mx-auto">
                  <a class="btn btn-dark" href="">netlify</a>
                  <a  class="btn btn-dark" href="">github</a>
                  </div>
                </div>
             </div>
     </div>
</div>
   
</template>

<script>
    export default {
        data(){
            return{
            projects:[
               {name:"", 
                image:'https://i.postimg.cc/YqbmKDQN/pexels-artem-podrez-6941453.jpg',
                link:''}, 
               {name:"", 
                image:'',
                link:''} ,
               {name:"", 
                image:'',
                link:''}, 
               {name:"", 
                image:'',
                link:''} ,
               {name:"", 
                image:'',
                link:''} ,
               {name:"", 
                image:'',
                link:''} 

            ]
     }}
        
    }
</script>

<style  scoped>
.projects{
    padding-top: 125px;
}

</style>