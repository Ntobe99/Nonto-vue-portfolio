<template>
    <div id="resume"  >
        <div class="section-content">
        <h2 class="section-heading">Resume</h2>
        <p class="para">I have a great passion for software development. After creating many projects I have earned good experience in various technologies. I give my 100% to any project or task I work on. With experience I have earned confidence and proficiency in what I do.</p>
      </div>

      <table class="table" v-for="item in resume">
  <thead>
    <tr>
      <th scope="col">Year</th>
      <th scope="col">Education</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{{ item.level }}</td>
      
    </tr>
    <tr>
      <th scope="row">{{ item.year }}</th>
      <td>{{ item.modules }}</td>
      
    </tr>
    <tr>
        <th scope="row">Location</th>
      <td>{{ item.location }}</td>
      

    </tr>
   
    
  </tbody>
</table>


      <table class="table" v-for="thing in experience">
  <thead>
    <tr>
      <th scope="col">{{ thing.year }}</th>
      <th scope="col">{{ thing.position }}</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td></td>
      
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      
    </tr>
    <tr>
        <th scope="row">Location</th>
      <td></td>
      

    </tr>
   
    
  </tbody>
</table>


      
     </div>


       
    
</template>

<script>
    export default {
        data(){
            return{
                resume:[
                    
                        {level:'MATRIC @NOMZAMO HIGH SCHOOL',
                        year:'2017',
                        location:'Strand,Western Cape',
                        modules:'Subects:Mathematics, Life Sciences, Physical Sciences, Life Orientation, Geography, English FAL and IsiXhosa.'},
                        {level:'BSC IN PHYSICAL SCIENCES @ UWC',
                        year:'2019-2021',
                        location:'Bellville,Western Cape',
                        modules:'Modules: Advaned calculus,Linear Algebra,Physics,Language Proficiency and computer literacy.'},
                
                      
                ],
                experience:[
                {position:"PART-TIME TEACHING ASSISTANT @ TRASURE HUNTERS DAYCARE",
                        year:'2020',
                        location:"Strand,Western Cape",
                        duties:"Getting the daycare ready before the kids come.Helping children who need extra support doing their tasks.Help the teacher plan activities,etc."
                    },
                       {position:"PART-TIME STORE ASSISTANT @ENVIRO YETHU",
                       year:'2021',
                        location:"Strand,Western Cape",
                        duties:"Arranging and labelling goods in the display shelves.Providing shopping advice and recommendations to customers.Collaborating with other team members to keep the sales floor area clean and organised at all times."
                    }
                ]
                
            }
        }
        
    }
</script>

<style  scoped>
#resume{
    padding-top: 120px;
    min-height: 100vh;
}


</style>