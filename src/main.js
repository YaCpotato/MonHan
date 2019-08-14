import Vue from 'vue'
import begin from './begin.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(begin)
}).$mount('#app')
