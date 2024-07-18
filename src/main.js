// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'
import './permission'
import 'normalize.css'
import '@/assets/css/base.css'
import './plugins/element.js'

import api from './api'
Vue.prototype.$api = api;

// import * as echarts from 'echarts'
// Vue.prototype.$echarts = echarts

//注册全局组件
import JosnExcel from 'vue-json-excel'
Vue.component('downloadExcel', JosnExcel)

//面包屑
import Breadcrumb from './components/Breadcrumb/Breadcrumb.vue'
Vue.component('Breadcrumb', Breadcrumb)

import i18n from './lang'


Vue.config.productionTip = false
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
