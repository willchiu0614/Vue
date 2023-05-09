<template>
  <div>
    <div>Day1 component</div>
    <DisplayNumber></DisplayNumber>
    <AddNumbers></AddNumbers>
  </div>
  <br>
  <hr>
  <div>
    <div>Day2 router</div>
    <br>
    <div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/day3_weather">Day3_weather</router-link>|
      <router-link to="/day4_covid19">Day4_covid19</router-link>
      <span v-for="i in 2" :key="i">
        |
        <router-link :to="`/user/${i}`">User/{{ i }}</router-link>
      </span>
      <router-view></router-view>
    </div>
  </div>
 
  <!-- <About></About> -->
</template>

<script>

import AddNumbers from './views/AddNumbers.vue';
import DisplayNumber from './views/DisplayNumber.vue';



export default {
  name: 'App',
  components: {
    AddNumbers,
    DisplayNumber
  },
  data(){
    return{
      
    }
  },
  methods:{
   
  },
  computed: {
    
  },
  created(){
    
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;

  background-size: cover;
  background-position: 50%;
  transition: 0.5s;
}



.container {
  height: 100vh;
  padding: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  )
  
}


</style>
