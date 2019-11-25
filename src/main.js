import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入全局样式
import './common/css/global.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
//引入样式
import 'swiper/dist/css/swiper.css'
//在全局使用该插件
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
// 导入需要的组件
import './plugins/vant'
// 导入响应式rem
import './config/rem'
// 导入全局过滤器
import './config/filter'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
