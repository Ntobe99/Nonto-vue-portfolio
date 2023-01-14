<template>
    <div class="testimonials">

        <div class="box" style="margin-left: 150px; align-items: center;">
          <div class="card"  style="width: 300px;height: 400px; margin: 20px; align-items: center; background-color: azure; "  v-for="item in testimonial">
                    <img :src="item.image" class="rounded-circle " style="width: 150px;height: 140px; margin-top: auto; ">
                    <div class="card-body">
                      <h5 class="card-title">{{ item.status }}</h5>
                      <i class="fa fa-quotes"></i>
                     <p class="card-text fst-italic"> {{item.message }}</p>
                     
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
 {  details:'Oslin Johnson',
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
    message:'Nontobeko  is a humble person who also takes pride in her work and makes sure she gets it done on time.',
    status:'Life Choices Student',
    image:'https://i.postimg.cc/gJgjS8t7/C11-Sivuyisiwe-4.jpg'},
   {details:'Asandile Langeni',
    message:'Nontobeko is a soft spoken person with great potential and ability to solve problems.',
    status:'Life Choices Student',
    image:'https://i.postimg.cc/9Mc2RsXz/DSC-3626.jpg'},
   {details:'Gift Mahlangu',
    message:"She is a resilient person that will provide great things in the near future as she works hard pushes herself to be better everyday.",
    status:'Life Choices Student',
    image:'https://i.postimg.cc/kM2jTMnZ/Gift-Mahlangu.jpg'}

       ],
       
 }
}
    }

    


</script>

<style  scoped>
.testimonials{
    margin-top: 110px;
    width: 100%;
    min-height: 100vh;

   
}

.box{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.card{
    border-radius: 0px;
   box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
  transition: .3s transform cubic-bezier(.155,1.105,.295,1.12),.3s box-shadow,.3s -webkit-transform cubic-bezier(.155,1.105,.295,1.12);
  padding-top: 10px;
  cursor: pointer;
}

.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}

@media only screen and (max-width:970px) {
  .box{
    display: grid; 
    grid-template-columns: 1fr 1fr;
    
  }
}

@media only screen and (max-width: 700px) {
  .box{
    margin-left:10px;
    display: grid; 
    grid-template-columns: 1fr;
    
  }
}

 

</style>