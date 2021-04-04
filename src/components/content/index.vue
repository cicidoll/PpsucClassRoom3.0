<template>
  <div class="index">
    <building></building>
    <el-container>
      <el-aside width="113px">
        <left-tabs></left-tabs>
      </el-aside>
      <el-main>
        <list></list>
      </el-main>
      <!-- <box></box> -->
    </el-container>  
  </div>
</template>

<script>
import Building from './building.vue'
// import Box from './box.vue'

import leftTabs from './leftTabs.vue'
import List from './list.vue'

export default {
  components: {
    'building': Building,
    // 'box': Box
    'left-tabs': leftTabs,
    'list': List
  }
}
</script>

<style lang="less" scoped>
.index{
  background-color: #fff;
  min-height: 80vh;
  margin: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  overflow: scroll;
}
.el-main{
  width: calc(100vw - 123px);
}
</style>