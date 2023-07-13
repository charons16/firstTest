import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import router from './router'
import store from './store'
import './plugins/element.js'
import '../src/assets/css/globle.css'
import './assets/font/bilifont/bilifont.css'
import {
  Swipe,
  SwipeItem,
  Lazyload
} from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(vueResource)
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
		Vue.prototype.$bus=this
	}
}).$mount('#app')
