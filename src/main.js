// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import './assets/css/owl.carousel.css'

import VueRouter from 'vue-router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueCarousel from 'vue-carousel';
import homePage from './components/homePage.vue'
import Layout from './components/Layout.vue'
import faq from './components/faq.vue'
import kontakt from './components/kontakt.vue'
import onama from './components/onama.vue'
import kredit6 from './components/kredit6.vue'
import steper from './components/steper.vue'
import noviKredit from './components/noviKredit.vue'
import otkupKredita from './components/otkupKredita.vue'
import compareKredita from './components/compareKredita.vue'
import unosZahtjeva from './components/unosZahtjeva.vue'
import login from './components/login.vue'

import 'webpack-jquery-ui/css'
import Vuex from 'vuex'

require('webpack-jquery-ui');
require('webpack-jquery-ui/css');

Vue.use(VueRouter)
Vue.use(VueCarousel);
Vue.component('icon', Icon)
Vue.use(Vuex)


  const routes = [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/",
          component: homePage
        },
        {
          path: "/kontakt",
          component: kontakt
        },
        {
          path: "/faq",
          component: faq
        },
        {
          path: "/onama",
          component: onama
        },
        {
          path: "/noviKredit",
          component: kredit6
        },
        {
          path: "/otkupKredita",
          component: otkupKredita
        },
        {
          path: "/compareKredita",
          component: compareKredita
        },
        {
        path: "/unosZahtjeva",
        component: unosZahtjeva
      }
      ]
    },
    {
      path: "/login",
      component: login
    }
  ];



const router = new VueRouter({
    routes,
  });
  
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})