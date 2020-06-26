<template>
  <div id="app">
    <HelloWorld msg="Question similarity visulisation"/>
   
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'

// import Network from 'vue2vis'

export default {
  name: 'App',
  components: {
    HelloWorld,
  }
 
    

  
}
</script>

<style>
/* @import "@vue-vis-network/dist/vueVisNetwork.css"; */

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  height:100vh;
  width:100vw
}
html body{
  border:0;
  padding:0;
  margin:0;
  height:100vh;
  width:100vw;
  overflow:hidden;
}
</style>
