import Vue from "vue"
import Vuex from "vuex"
import NUMBER from "./modules/number"
Vue.use(Vuex)

const Store=new Vuex.Store({
    modules:{
        NUMBER
    }
})
export default Store