<template>
  <div class="index">
    <building></building>
    <box></box>
  </div>
</template>

<script>
import Building from './building.vue'
import Box from './box.vue'

export default {
  components: {
    'building': Building,
    'box': Box
  },
  methods: {
    // getChildMsg(msg) {
    //   console.log('getChildMsg'+msg)
    //   this.activeName = msg
    // }
  }
}
</script>

<style lang="less" scoped>
.index{
  height: 80vh;
  padding: 5px;
  padding-top: 0px;
  border-radius: 4px;
}
</style>