<template>
  <div>
    <left-tabs></left-tabs>
    <list></list>
  </div>
</template>

<script>
import leftTabs from './leftTabs.vue'
import List from './list.vue'

export default {
  components: {
    'left-tabs': leftTabs,
    'list': List
  }
}
</script>

<style lang="less" scoped>
div:nth-child(1){
  display: flex;
}
</style>