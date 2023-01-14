<template>
    <div class="projects">
        <div class="container" style="display: grid; grid-template-columns: repeat(3, 1fr);grid-template-rows: repeat(2, 1fr);">
              <div class="card" style="width: 400px;height: 320px; margin: 10px;  background-color: azure  ; box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;;" v v-for="item in projects">
                <div class="card-body">
                    <img :src="item.image"  class="card-img-top" alt="...">
                  <h5 class="card-title bold">{{ item.name }}</h5>     
                  <div class=" d-grid gap-2 col-6 mx-auto">
                  <a class="btn btn-dark" :href="item.netlify" target="_blank_">netlify</a>
                  <a  class="btn btn-dark" :href="item.github" target="_blank_">github</a>
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
               {name:"Art gallery e-commerce website", 
                image:'https://i.postimg.cc/Nfr3MmkM/Art-Gallery.png',
                netlify:'https://js-project-nontobeko.netlify.app/',
                github:'https://github.com/Ntobe99/JS-PROJECT'}, 
               {name:"Calculator ", 
                image:'https://i.postimg.cc/vmzFyyLt/calculator.png',
                netlify:'https://nontobeko-calculator.netlify.app/',
                github:'https://github.com/Ntobe99/calculator-nonto'} ,
               {name:"Clothing shop", 
                image:'https://i.postimg.cc/vBqJ1vK1/clothes-shop.png',
                netlify:'https://enchanting-crepe-3818ab.netlify.app/ ',
                github:'https://github.com/Ntobe99/clothes-store'}, 
               {name:" Netflix clone", 
                image:'https://i.postimg.cc/vZFp6T0v/netflix-clone.png',
                netlify:'https://dancing-rugelach-5d5235.netlify.app',
                github:'https://github.com/Ntobe99/netflix'} ,
               {name:" Personal portfolio", 
                image:'https://i.postimg.cc/rsDv5r6f/Html-portfolio.png',
                netlify:'https://nontobeko-portfolio.netlify.app/',
                github:'https://github.com/Ntobe99/portfolio-updated'} ,
               {name:"Sneaker Store", 
                image:'https://i.postimg.cc/kMZrqf8z/Sneaker-store.png',
                netlify:'https://lighthearted-tartufo-c9867d.netlify.app/',
                github:'https://github.com/Ntobe99/sneaker-project'} 

            ]
     }}
        
    }
</script>

<style  scoped>
.projects{
    padding-top: 125px;
   
    
 
}
@media only screen and (max-width: 600px) {
  .container{
    display: grid; 
    grid-template-columns: 1fr;
    
  }
}




</style>