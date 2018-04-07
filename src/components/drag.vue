<template>
<div class="container">
<div class="row">

<div class="container">
  <div class="row">
    <div class="col-sm">
     <draggable v-model="myArray" :options="{group:'people'}" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
</draggable>
    </div>
    <div class="col-sm">
     <draggable v-model="myArray1" :options="{group:'people'}" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray1" :key="element.id">{{element.name}}</div>
</draggable>

    </div>
    <div class="col-sm">
     <draggable v-model="myArray2" :options="{group:'people'}" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray2" :key="element.id">{{element.name}}</div>
</draggable>
    </div>
  </div>
</div>

</div>

</div>

</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'drag',
  data () {
    return {
      myArray: [{'name': 'magic', 'id': 259}, {'name': 'Foo', 'id': 2295}, {'name': 'Baz', 'id': 53}, {'name': 'Nick', 'id': 2952}],
      myArray1: [{'name': 'brilliant', 'id': 21}, {'name': 'way', 'id': 219085}, {'name': 'GO', 'id': 582}, {'name': 'WOW', 'id': 258}],
      myArray2: [{'name': 'Item', 'id': 282}],
      dragging: false
    }
  },
  components: {
    draggable
  },
  methods: {
    increment () {
      this.$store.commit('INCREMENT')
    }
  }
}

</script>
