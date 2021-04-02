<template>
  <div class="box">
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
.box{
  display: flex;
  height: calc(100% - 40px);
}
</style>