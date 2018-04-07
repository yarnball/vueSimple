<template>
<div id="app">
  <router-link v-bind:to="'/'"> <img class='centreThis' src="./assets/logo.png"></router-link>
  <router-view/>
  <router-link v-for="link in avLinks.filter(lnk=>lnk.showInNav)" :key="link.name" v-bind:to="'/' + link.name">{{link.name}} </router-link>
</div>

</template>

<script>
import { links } from './router'
export default {
  name: 'App',
  data () {
    return {
      avLinks: links
    }
  }
}

</script>

<style lang="css">
    @import 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css';
</style>

<style>
.centreThis{
    text-align:center;
    display: block;
    margin-left: auto;
    margin-right: auto
}
</style>
