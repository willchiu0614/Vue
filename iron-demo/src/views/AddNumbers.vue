<template>
    <div>
        <input
        type="text"
        name="number"
        placeholder="輸入數字"
        v-model="number"
        >
        <button @click="addNumber">add</button>
    </div>
</template>
<script>
export default{
    data(){
        return {
            number:0
        }
    },
    methods:{
        addNumber(){
            console.log(this.number)
            this.$store.commit('add',{num:parseInt(this.number) })
        }
    }
}
</script>