import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/common.scss'
import Carousel3d from 'vue-carousel-3d'
import Utils from '@/utils/index'
import Web3 from 'web3'
import vuetify from './plugins/vuetify'
import message from './plugins/message/index'
import config from './service/index'
// import VueLoadmore from 'vuejs-loadmore'
//
Vue.use(Carousel3d)
// Vue.use(VueLoadmore, {
//   lang: 'en-US'
// })

Vue.prototype.$msg = message
Vue.prototype.$utils = Utils
Vue.prototype.$Web3 = Web3
Vue.prototype.$config = config.chiaIdConfig;
Vue.prototype.$metaMaSKWeb3 = new Web3(window.ethereum)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
