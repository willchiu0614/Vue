<template>
    <div>
        <div>userid:{{ this.$route.params.userId }}</div>
        <div>getM=>name:{{ getM }}</div>
    </div>
</template>
<script>

export default {
    name: 'User-component',
    data(){
        return{
            message:"this is User page",
            users:[{
                name:"will",
                age:25
            },{
                name:"heng",
                age:29
            }]
        }
    },
    methods:{

    },
  computed: {
    getM() {
      return this.users[parseInt(this.$route.params.userId)-1].name;
    },
  }
    // ...
  }
</script>