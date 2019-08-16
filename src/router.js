import Vue from 'vue'
import Router from 'vue-router'
import begin from './begin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/begin',
      name: 'begin',
      component: begin
    }
  ]
})
