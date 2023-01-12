<template>
    

    <div class="testimonials">
        <div class="box">
 <div class="card" style="width:500px; height: 500px; align-items: center;  "  v-for="item in testimonial">
                    <img :src="item.image" class="rounded-circle " style="width: 400px;height: 300px;">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.status }}</h5>
                      <i class="fa fa-quotes">
                     <p class="card-text fst-italic"> {{item.message }}</p></i>
                      <p>-{{ item.details }}</p>
                     </div>
                    </div>
                  </div>
                </div>
            
   
</template>

<script>
    export default {
        data() {
        return {
            
    testimonial:[
 {details:'Asandile langeni',
    status:'Life Choices Student',
    message:'Nontobeko is a hard working person.I am convinced Ms Mhlongo will be a great asset to any organisation.',
         status:'Life choice Lecturer',
    image:'https://i.postimg.cc/BbwdVn0s/oslin.jpg'},
   {details:'Keren Bruce',
    message:'Nontobeko is a wonderful person to work with,she gives her 100% every single time.',
    status:'Life Choices Student',
    image:'https://i.postimg.cc/6QLyZDrt/DSC-3514.jpg'},
   {details:'Nozipho mayila',
    message:"Nontobeko is a reliable person and a great team player.She makes sure every team member knows their role in a project and she's always there to land a helping hand. ",
    status:'Life Choices Student',
    image:'https://i.postimg.cc/j2C5G2GS/C11-Nozipho-Mayila-2.jpg'},
   {details:'Sivuyisiwe Mgijima',
    message:'Nontobeko  is a humble person who also takes pride in her work and makes sure she gets it done on time.She makes sure that everyone working with her has everything they need to make the job gets done eficiently and on time.',
    status:'Life Choices Student',
    image:'https://i.postimg.cc/gJgjS8t7/C11-Sivuyisiwe-4.jpg'}

       ],
       
 }
}
    }

    


</script>

<style  scoped>
.testimonials{
    margin-top: 125px;
    display: grid;
   
}
.card {
        position: relative;
        width: 300px;
        height: 300px;
        color: #fff;
        background: transparent;
        overflow: hidden;
        border-top: 1px solid rgba(255, 49, 49, 0.5);
        border-right: 1px solid rgba(0, 255, 255, 0.5);
        border-bottom: 1px solid rgba(57, 255, 20, 0.5);
        border-left: 1px solid rgba(255, 255, 113, 0.5);
        font-family: sans-serif;
        
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 1em;
        background: linear-gradient(315deg, #cacaca, #f0f0f0);
       box-shadow:  -20px -20px 60px #bebebe,
             20px 20px 60px #ffffff;
      }

 

</style>