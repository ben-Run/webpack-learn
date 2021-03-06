import 'normalize.css' 
import '@/style/index.scss'
import Vue from 'vue'
import { Person } from '@/view/index'
import App from '@/App.vue'
import router from '@/router'

const p = new Person()
p.name = 'joel'
p.age = 22
p.address = 'china'
p.say()
p.run()



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
