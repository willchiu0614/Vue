<template>
    <div>
        <h3>About</h3>
    </div>
    <h1>{{message}}</h1>
    <h1>{{print}}</h1>
</template>
<script>
export default {
    name: 'About-component',
    data(){
        return{
            message:"this is about page"
        }
    },
    methods:{
        print(){
            console.log("about page")
        }
    }
    // ...
  }
</script>