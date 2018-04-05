<template>
  <div>
    <h1>CRIKEY!!</h1>
    {{ $store.state.count }}
  </br>
    <button @click="increment">UP count</button>
    <button @click="decrement">Down count</button>
  </div>
</template>

<script>
  export default {
    name: 'Counter',
    methods: {
      increment () {
        this.$store.commit('INCREMENT')
      },
      decrement () {
        this.$store.commit('DECREMENT')
      }
    }
  }
</script>