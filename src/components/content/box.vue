<template>
  <div class="box">
    <left-tabs></left-tabs>
    <list></list>
    <!-- <div style=" clear:both; "></div> -->
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
  // height: calc(100% - 40px);
  // overflow-y: scroll;
  // overflow:hidden;
  // overflow-y: auto;
}
</style>