// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    INCREMENT (state) {
    console.log('what!', state.count)
      state.count += 1
    },
    DECREMENT (state) {
      state.count -= 1
    },
    RESET (state) {
      state.count = 0
    }
  },
  actions: {
    asyncIncrement ({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000)
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
