import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import '../static/css/reset.css' /**引入样式重置 */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})