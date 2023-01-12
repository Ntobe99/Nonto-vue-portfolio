<template>
<div>
  <Navbar/>
  </div>
  <RouterView/>
  <div>
  <Footer></Footer>
</div>
  
</template>
<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default{
  name:'App',
  components:{Navbar,Footer}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #D3E4CD;
  color: #2c3e50;
  width: 100%;
}

nav {
position: fixed !important;
width: 100%;
top:0;
z-index: 20;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
background-color:#99A799 !important;


}

nav a {
  margin-left: 100px;
  align-items: center !important;
  font-weight:400;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: rgb(230, 204, 230);
}
</style>
