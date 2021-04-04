<template>
  <div class="item" @click="dialogVisible = true">
    <div class="content">
      <el-dialog
        title="详细"
        v-model="dialogVisible"
        width="80%">
        <span>调课信息：详细······</span><br>
        <span>调课信息：详细······</span>
      </el-dialog>
      <span style="text-align:center;">{{itemData}}</span>
      <span>调课信息：x条</span>
      <span>停课信息：x条</span>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  props: ['itemData'],
  setup() {
    let dialogVisible = ref(false)

    return {
      dialogVisible
    }
  }
}
</script>

<style lang="less" scoped>
.item{
  
  // height: 0;
  // width: calc(33% - 10px);
  // height: 80px;
  // width: 80px;
  // padding-bottom: calc(33% - 10px);
  width: calc(50% - 10px);
  padding: 5px;
  font-size: 8px;

  .content{
    // height: 70px;
    // width: 70px;
    
    border-radius: 4px;
    background-color: #267aec;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  // float: left;
  // position:absolute;
  // left:0;
  // top:0;
  // right:0;
  // bottom:0;
}
.el-dialog{
  height: 50vh;
}
</style>