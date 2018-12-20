// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './public/axios'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;

router.beforeEach((to, from, next) => {
  // iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  // iView.LoadingBar.finish();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
