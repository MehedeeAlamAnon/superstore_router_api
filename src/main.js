import Vue from 'vue'
import App from './App.vue'

// window.$=window.jQuery=require('jQuery')
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import { routes } from './router/index.js'

const router = new VueRouter({
  routes
})

import Vuex from 'vuex'

Vue.use(Vuex)

import { storage } from './store/index.js'

const store = new Vuex.Store(storage)

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
