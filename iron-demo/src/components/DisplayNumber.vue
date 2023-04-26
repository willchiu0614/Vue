<template>
    <div>
        <h3>{{ getNumbers }}</h3>
    </div>
</template>
<script>
export default{
    data(){
        return{
            
        }
    },
    computed:{
        getNumbers(){
            return this.$store.state.numbers
            
        }
    }
}
</script>