<template>
  <div>
    {{ $store.state.count }}
    <br/>
    {{ $store.state.text }}
    <br/>
    <button @click="textUpd">Chang text</button>

    <br/>
    <button @click="updJSON">SET JSON</button>
    {{ $store.state.json }}
    <br/>
    Yo!!!
    {{ name }} 
    <br/>
    {{ words }}
    <br/>
    <input type="text" name="words" id="cut_cover" placeholder="Blah!" v-model="words" text>
    <br/>
    <br/>
      <h2 class="hello">Total: {{ total }}</h2>
  <br/>
<input type="number" name="text1" id="cut_text" placeholder="e.g. '0.00' " value="" v-model="text1" number>
<input type="number" name="text2" id="cut_cover" placeholder="e.g. '0.00' " value="" v-model="text2" number>
    </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "Use this",
      text1: 0,
      text2: 0,
      words: ""
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
    total: function() {
      return Number.parseInt(this.text1) + Number.parseInt(this.text2)
    },
    worder: function() {
      return this.words
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
