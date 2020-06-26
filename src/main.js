import Vue from 'vue'
import App from './App.vue'
// import { Network } from "vue-vis-network";
// Vue.component('network', Network);

Vue.config.productionTip = false
// Vue.component('Network', Network);

new Vue({
  render: h => h(App),
}).$mount('#app')
