
import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './routerMap'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})


