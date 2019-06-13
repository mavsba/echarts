import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  if (from.name === 'gzt' && to.name === 'mm') {
    alert('进来')
    next()
  }
  next()
})
export default router
