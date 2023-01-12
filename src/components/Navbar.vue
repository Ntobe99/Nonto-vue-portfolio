<template>
    <nav class="navbar navbar-expand-lg bg-body-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img src="https://i.postimg.cc/bNZP4K6f/n-logo-removebg-preview.png" alt="Logo" width="40" height="34" class="d-inline-block align-text-top rounded-circle">
      
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about">About</router-link>
        </li>
        <li class="nav-item">
          <router-link to='/resume'>Resume</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects">Projects</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/testimonials">Testimonials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact me</router-link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

    export default {
      name:'Navbar'
    }
</script>


<style  scoped>
 
ul{
  list-style: none;
  text-decoration: none !important;
}
.navbar{
  padding: 30px;
}
.nav-item{
  align-items: center;
}


</style>