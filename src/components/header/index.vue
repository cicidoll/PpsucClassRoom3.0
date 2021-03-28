<template>
  <el-row :gutter="20" id="header">
    <el-col :span="4">
      <user></user>
    </el-col>
    <el-col :span="16">
      <search></search>
    </el-col>
    <el-col :span="4">
      <list></list>
    </el-col>
  </el-row>
</template>

<script>
import List from './list.vue'
import Search from './search.vue'
import User from './user.vue'
import headerUrl from '../../assets/image/header-1.png'

export default {
  data () {
    return {
      headerUrl
    }
  },
  components: {
    'list': List,
    'search': Search,
    'user': User
  }
}
</script>

<style lang="less" scoped>
.el-row {
  height: 10vh;
  background-image: url('src/assets/image/header-1.png');
  background-color: #267aec;
  .el-col{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>