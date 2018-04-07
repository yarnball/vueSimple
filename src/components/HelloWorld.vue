<template>
<div class="centreThis">
  {{ $store.state.count }}
  <br/> {{ $store.state.text }}
  <br/>
  <button @click="textUpd">Chang text</button>
  <br/>
    <br/> Yo!!! {{ name }}
  <br/> {{ words }}
  <br/>
  <br/>
  {{$store.state.apiResults.slice(0,4)}}
  <button @click="updJSON">SET JSON</button>
  <ul v-for="(apiResult, index) in $store.state.apiResults.slice(0,4)"
      v-bind:key="index">
      <input type="text"
         name="words"
         id="cut_cover"
         placeholder="Put"
         v-model="apiResult.artistName"
         text>

  <input v-for="(innerData, index) in apiResult.testArea" v-bind:key="index" v-model="innerData.name">
  </ul>

  <h2>Total: {{ total }}</h2>
  <br/>

    <input type="number"
           name="text1"
           id="cut_text"
           placeholder="e.g. '0.00' "
           value=""
           v-model="text1"
           number>

    <input type="number"
           name="text2"
           id="cut_cover"
           placeholder="e.g. '0.00' "
           value=""
           v-model="text2"
           number>

</div>

</template>

<script>
import numeral from 'numeral'

export default {
  name: 'HelloWorld',
  data () {
    return {
      name: 'Use this',
      text1: 0,
      text2: 0,
      words: ''
    }
  },
  methods: {
    textUpd () {
      this.$store.commit('UPDATETEXT')
    },
    updJSON () {
      this.$store.dispatch('setJSON')
    }
  },
  computed: {
    total () {
      const num = Number.parseInt(this.text1) + Number.parseInt(this.text2)
      let res = 0
      if (num < 1000) {
        res = num
      } else if (num < 100000) {
        res = numeral(num).format('0.0a')
      } else {
        res = numeral(num).format('0.00a')
      }
      return res
    },
    worder () {
      return this.words
    }
  }
}

</script>
