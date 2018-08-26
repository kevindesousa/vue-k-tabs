import Vue from 'vue'
import App from './App.vue'
import KTabs from '@kevindesousa/vue-k-tabs'

Vue.config.productionTip = false


Vue.use(KTabs)

new Vue({
  render: h => h(App)
}).$mount('#app')
