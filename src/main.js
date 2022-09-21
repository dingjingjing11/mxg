import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import './assets/font_3656446_fcijuym4lln/iconfont.css'
Vue.use(ElementUI);


Vue.config.productionTip = false
console.log("--",process.env.VUE_APP_BASE_API);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
