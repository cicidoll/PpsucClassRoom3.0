<template>
  <el-row :gutter="20">
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
  width: 100%;
  background-image: url('src/assets/image/header-1.png');
  background-color: #267aec;
  margin-left: 0px !important;
  margin-right: 0px !important;
  border-radius: 2px;
  .el-col{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>