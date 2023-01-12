<template>
     <div class="container">
<div class="section-title">
  <h2>About</h2>
  <p>Nontobeko is a an ambitious person who works at her own initiative without needing direction.She has strong interpersonal skills ,she works well both individually as well as a contributor.She seeks new challenges and tries to think out of the box while looking for creative solutions to a given problem.</p>
</div>

<div class="row">
  <div class="col-lg-4" data-aos="fade-right">
    <img src="https://i.postimg.cc/XYXsS1YR/IMG-20221101-WA0004-1-removebg-preview.png" class="img-fluid" style="height: 400px;">
  </div>
  <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
    <h3> Novice Web Developer.</h3>
    <p class="fst-italic">
      
    </p>
    <div class="row">
      <div class="col-lg-6">
        <ul>
          <li><i class="fa fa-chevron-right"></i> <strong>Birthday:</strong> <span>6 December 1999</span></li>
          <li><i class="fa fa-chevron-right"></i> <strong>Phone:</strong> <span>+27 62 357 2965</span></li>
          <li><i class="fa fa-chevron-right"></i> <strong>City:</strong> <span>Cape Town ,South africa</span></li>
        </ul>
      </div>
      <div class="col-lg-6">
        <ul>
          <li><i class="fa fa-chevron-right"></i> <strong>Age:</strong> <span>23</span></li>
          <li><i class="fa fa-chevron-right"></i> <strong>Education:</strong> <span>Life Choices Academy</span></li>
          <li><i class="fa fa-chevron-right"></i> <strong>E-mail:</strong> <span>ntobsie2010@gmail.com</span></li>
          <li><i class="fa fa-chevron-right"></i> <strong>Occupation:</strong> <span>Student</span></li>
        </ul>
      </div>
    </div>
    <div class="skills padding">
      <h2 >Skills</h2>
      <p class="text-center">HTML</p>
      <div class="progress">
          <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
  
            <p class="text-center">CSS</p>
          <div class="progress">
           <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
         <p class="text-center">JAVASCRIPT</p>
          <div class="progress">
          <div class="progress-bar w-25" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">30%</div>
        </div>
  </div>
</div>
</div>
</div>

</template>

<script>

    export default {
        
    }
</script>

<style  scoped>
.container{
  
  padding-top: 150px !important;
  min-height: 100vh;
}
.content h3 {
    font-weight: 700;
    font-size: 26px;
    color: navy;
  }
  
  .content ul {
    list-style: none;
    padding: 0;
  }
  
   .content ul li {
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }
  
  .content ul strong {
    margin-right: 10px;
  }
  
   .content ul i {
    font-size: 16px;
    margin-right: 5px;
    color:black ;
    line-height: 0;
  }
   
 .progress-bar{
    background-color:black;

  }
  
   .content:last-child {
      margin-bottom: 0;}
  
  

</style>