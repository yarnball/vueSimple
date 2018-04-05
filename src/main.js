// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false
const URL =
  "https://itunes.apple.com/search?term=Doctor%20Who&media=music&entity=album";
const store = new Vuex.Store({
  state: {
    count: 0,
    text: 'things',
    json: ''
  },
  mutations: {
    INCREMENT (state) {
      state.count += 1
    },
    DECREMENT (state, passedVal) {
    	console.log('vuex',passedVal)
      state.count -= 1
    },
    UPDATETEXT (state, val) {
      state.text = 'OTHER'
    },
 	GETDATA (state, val) {
      state.json = val
    },
  },
  actions: {
    asyncIncrement ({ commit }) {
      setTimeout(() => {
        commit('UPDATETEXT')
      }, 1000)
    },
    setJSON ({ commit }) {
      fetch(URL)
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        throw new Error("Couldn't obtain information from the service");
      }
    })
    .then(json => commit('GETDATA', JSON.stringify(json.results)))
    .catch(err => console.error(err.message));
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
