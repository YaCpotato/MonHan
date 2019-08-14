import Vue from 'vue'
import Router from 'vue-router'
import begin from './begin'
import App from './App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/begin',
      name: 'begin',
      component: begin
    },
    {
      path: '/App',
      name: 'App',
      component: App
    },
    {
      path: '/Open',
      name: 'App',
      component: App
    },
  ]
})
