const state={
    number:0
}
const mutations={
    add(a,payload){
        console.log(payload)
       state.number=state.number+1
    },
    jian(a,payload){
        console.log(payload)
        if(state.number>0){
            state.number=state.number-1
        }else{
            state.number=state.number=0
        }
     }
}
export default {
    namespaced: true,
    state,
    mutations
}