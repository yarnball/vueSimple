<template>
<div class='centreThis'>
  <h1>CRIKEY!!</h1> {{ $store.state.count }}
  <button @click="increment">UP count</button>
  <button @click="decrement">Down count</button>
  <br/>
  <button @click="asyncIncrement">Async! (Wait for call back!!)</button>

  {{ $route.query }}
</div>

</template>

<script>
export default {
  name: 'Counter',
  methods: {
    increment () {
      this.$store.commit('INCREMENT')
      this.$router.push({name: 'counter', query: {'count': this.$store.state.count}})
    },
    decrement () {
      this.$store.commit('DECREMENT', 'Pass this please!')
    },
    asyncIncrement () {
      this.$store.dispatch('asyncIncrement')
    }
  }
}

</script>
