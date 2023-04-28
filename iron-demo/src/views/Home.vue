<template>
    <div>
        <h3>home</h3>
    </div>
    <h1>{{message}}</h1>
    <h1>{{print}}</h1>
</template>
<script>
export default {
    name: 'Home-component',
    data(){
        return{
            message:"this is home page"
        }
    },
    methods:{
        print(){
            console.log("home page")
        }
    }
    // ...
  }
</script>