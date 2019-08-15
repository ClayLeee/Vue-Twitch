import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  // router,
  // store,
  // template: '<App/>',
  components: { App },
  render: h => h(App)
})
