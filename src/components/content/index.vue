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
  }
}
</script>

<style lang="less" scoped>
.index{
  background-color: #fff;
  height: 80vh;
  margin-top: 5px;
  margin: 5px;
  border-radius: 4px;
}
</style>