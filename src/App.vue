<template>
<div id="app">
  <img src="./assets/logo.png">
  <router-view/>
  <router-link v-bind:to="'counter'">counter</router-link>
</div>

</template>

<script>
export default {
  name: 'App'
}

</script>

<style lang="css">
    @import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css';
</style>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
