import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const URL = 'https://itunes.apple.com/search?term=Doctor%20Who&media=music&entity=album'

const state = {
  count: 0,
  text: 'things',
  json: ''
}

const mutations = {
  INCREMENT (state) {
    state.count += 1
  },
  DECREMENT (state, passedVal) {
    console.log('vuex', passedVal)
    state.count -= 1
  },
  UPDATETEXT (state, val) {
    state.text = 'OTHER'
  },
  GETDATA (state, val) {
    state.json = val
  }
}

const actions = {
  asyncIncrement ({ commit }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  },
  async setJSON ({commit}) {
    try {
      let response = await fetch(URL)
      let json = await response.json()
      commit('GETDATA', JSON.stringify(json))
    } catch (e) {
      console.log('BAD', e.message)
      return e.message
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

/* eslint-disable eol-last */
// export default new Vuex.Store({
//   state: {
//     count: 0,
//     text: 'things',
//     json: ''
//   },
//   mutations: {
//     INCREMENT (state) {
//       state.count += 1
//     },
//     DECREMENT (state, passedVal) {
//       console.log('vuex', passedVal)
//       state.count -= 1
//     },
//     UPDATETEXT (state, val) {
//       state.text = 'OTHER'
//     },
//     GETDATA (state, val) {
//       state.json = val
//     }
//   },
//   actions: {
//     asyncIncrement ({ commit }) {
//       setTimeout(() => {
//         commit('INCREMENT')
//       }, 1000)
//     },
//     async setJSON ({commit}) {
//         try {
//             let response = await fetch(URL)
//             let json = await response.json()
//             commit('GETDATA', JSON.stringify(json))
//         } catch (e) {
//           console.log('BAD', e.message)
//             return e.message;
//         }
//     },
//   }
// })
