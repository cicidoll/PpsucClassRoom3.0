<template>
  <div class="list">
    <item-vue></item-vue>
    <item-vue></item-vue>
    <item-vue></item-vue>
  </div>
</template>

<script>
import itemVue from './list/item.vue'
import { reactive } from 'vue'

export default {
  components: {
    'item-vue': itemVue
  }
}
</script>

<style lang="less" scoped>
.list{
  height: calc(100% - 40px);
  width: calc(100vw - 10px - 40px);
}
</style>