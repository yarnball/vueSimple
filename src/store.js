import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// Vue.use(Vuex)

const URL = "https://itunes.apple.com/search?term=Doctor%20Who&media=music&entity=album";
export default new Vuex.Store({
  state: {
    count: 0,
    text: 'things',
    json: ''
  },
  mutations: {
    INCREMENT(state) {
      state.count += 1
    },
    DECREMENT(state, passedVal) {
      console.log('vuex', passedVal)
      state.count -= 1
    },
    UPDATETEXT(state, val) {
      state.text = 'OTHER'
    },
    GETDATA(state, val) {
      state.json = val
    },
  },
  actions: {
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000)
    },
    setJSON({ commit }) {
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

// const state = {
//   count: 0
// }

// const mutations = {
//   INCREMENT (state) {
//     state.count++
//   }
// }

// export default new Vuex.Store({
//   state,
//   mutations
// })