<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="box">
      <button @click="jiannumber">-</button>
      <p>{{number}}</p>
      <button @click="addnumber">+</button>
    </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex" //引入相应的辅助函数
export default {
  computed:{
    ...mapState({
      number:state=>state.NUMBER.number
    })
  },
  methods:{
    ...mapMutations({ //通过辅助函数映射相应的方法
      add:'NUMBER/add', 
      jian:'NUMBER/jian'
    }),
    jiannumber(){
      this.jian('我爱你啊傻子') //这里可以向模块方法里传值，相当于this.$store({type:'***',payload:"***"})
    },
    addnumber(){
      this.add('我也爱你啊傻子') //和上条同理
    }
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{
  display:flex;
  justify-content:center; 
}
</style>
