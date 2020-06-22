import Vue from 'vue'
import index from './pages/index.vue'
import scrollSpy, { Easing } from 'vue2-scrollspy'

Vue.use(scrollSpy, {
  easing: Easing.Cubic.In
})

new Vue({
  el: '#index',
  ...index
})
