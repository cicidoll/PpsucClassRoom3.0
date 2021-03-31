<template>
  <div class="index">
    <building></building>
    <box style="height: 200px;"></box>
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
  height: 90vh;
  width: 100%;
  background-color: pink;
  
}
</style>