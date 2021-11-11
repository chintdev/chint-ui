import Vue from 'vue'
import App from './App.vue'

import chintPrint from '../packages/chint-print/index.js'
Vue.use(chintPrint)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
