<template>
    <div id="resume">
        <div class>

        </div>
      </div>
    
</template>

<script>
    export default {
        data(){
            return{
                resume:[
                    summary={
                        name:'NONTOBEKO MHLONGO',
                        city:"Cape Town",
                        number:'+27 62 357 2965',
                        email:'ntobsie2010@gmail.com'
                    },
                    education=[
                        {level:'MATRIC @NOMZAMO HIGH SCHOOL',
                        year:'2017',
                        location:'Strand,Western Cape',
                        modules:'Subects:Mathematics, Life Sciences, Physical Sciences, Life Orientation, Geography, English FAL and IsiXhosa.'},
                        {level:'BSC IN PHYSICAL SCIENCES @ UWC',
                        year:'2019-2021',
                        location:'Bellville,Western Cape',
                        modules:'Modules: Advaned calculus,Linear Algebra,Physics,Language Proficiency and computer literacy.'}
                ],
                    experience=[
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
                ]
            }
        }
        
    }
</script>

<style  scoped>
#resume{
    padding-top: 120px;
}
</style>