// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import InfiniteSlideBar from 'vue-infinite-slide-bar'
import VueAgile from 'vue-agile'
//import App from './App'
import router from './router'
import Navigation from './components/Navigation'
import Accueil from './components/Accueil'
import Panier from './components/Panier'
import Authentification from './components/Authentification'


Vue.config.productionTip = false
Vue.component('infinite-slide-bar', InfiniteSlideBar)
Vue.use(VueAgile)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Accueil,
      Navigation, Panier, Authentification}

})
