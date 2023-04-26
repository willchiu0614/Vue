import { createStore } from "vuex";

//建立 store 實例
const store = createStore({
    state(){
        return{
            numbers:[1,2,3,4],
        };
    },
    mutations:{
        add(state,{num}){
            state.numbers.push(num)
        }
    },
    getters:{

    },
    actions:{

    }
});

export default store;