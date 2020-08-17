import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
new Vue({
  render: h => h(App)
}).$mount('#app')
