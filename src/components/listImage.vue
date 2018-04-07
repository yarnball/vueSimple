<template>
<div>
  <button class="centreThis" @click="updJSON">SET JSON</button>
  <div v-for="(apiResult, inx) in $store.state.apiResults"
       v-bind:key="inx"
       class="media">
    <img class="align-self-start mr-3"
         :src="apiResult.artworkUrl100"
         alt="Generic placeholder image">
    <div class="media-body">
      <h5 class="mt-0">{{ apiResult.artistName }}</h5>

      <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin dimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
      <p>Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
    </div>
  </div>
</div>

</template>

<script>
export default {
  name: 'listImage',
  methods: {
    updJSON () {
      this.$store.dispatch('setJSON')
    }
  }
}

</script>
