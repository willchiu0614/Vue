<template>
  <div></div>
  <router-link to="/home">Home</router-link> |
  <router-link to="/about">About</router-link>
  <DisplayNumber></DisplayNumber>
  <AddNumbers></AddNumbers>

  
</template>

<script>

import AddNumbers from './components/AddNumbers.vue';
import DisplayNumber from './components/DisplayNumber.vue';
export default {
  name: 'App',
  components: {

    AddNumbers,
    DisplayNumber
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
