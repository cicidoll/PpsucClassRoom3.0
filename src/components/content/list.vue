<template>
  <div class="list">
    <button @click="test">list</button>
    <item-vue></item-vue>
    <item-vue></item-vue>
    <item-vue></item-vue>
  </div>
</template>

<script>
import itemVue from './list/item.vue'
import { reactive } from 'vue'

export default {
  props:['testData'],
  data () {
    return {
      roomData: this.testData
    }
  },
  components: {
    'item-vue': itemVue
  },
  methods: {
    test() {
      console.log(this.testData)
    }
  },
  watch: {
   roomData(newV,oldV) {
     // do something
     console.log(newV)
   } 
}
}
</script>

<style lang="less" scoped>
.list{
  height: calc(100% - 40px);
  width: calc(100vw - 10px - 40px);
}
</style>