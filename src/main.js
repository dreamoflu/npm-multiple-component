// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import '../static/style/common.css'

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.config.productionTip = false

import axios from 'axios'


let instance = axios.create();
Vue.prototype.$postHttp = function (url, param) {
  instance.defaults.headers.common['token'] = localStorage.getItem("token");
// Add a request interceptor
  instance.interceptors.request.use(function (config) {

    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
  instance.interceptors.response.use(function (response) {
    // Do something with response data

    return response;
  }, function (error) {
    // Do something with response error
    return Promise.reject(error);
  });
  return instance.post(url, param);
};
document.addEventListener('DOMContentLoaded', function() {
  var html = document.documentElement;
  var windowWidth = html.clientWidth;
  html.style.fontSize = windowWidth / 7.5 + 'px';
  // console.log(windowWidth)
}, false);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
