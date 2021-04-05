<template>
  <div class="item" @click="dialogVisible = true">
    <div class="content">
      <el-dialog
        title="具体安排"
        v-model="dialogVisible"
        width="80%">

        <span style="text-align: center;">调停课信息：</span>
        <el-table stripe :data="mobilizeBorrowDataState.MobilizeRoom[itemData]">
          <el-table-column prop="className" label="教室名"></el-table-column>
          <el-table-column prop="classes" label="调课类别"></el-table-column>
          <el-table-column prop="oldDate" label="原上课日期"></el-table-column>
          <el-table-column prop="oldTimes" label="原节次"></el-table-column>
          <el-table-column prop="oldRoom" label="原教室"></el-table-column>
          <el-table-column prop="newDate" label="现上课日期"></el-table-column>
          <el-table-column prop="newTimes" label="现节次"></el-table-column>
          <el-table-column prop="newRoom" label="现教室"></el-table-column>
        </el-table>

        <span style="text-align: center;">借用教室信息：</span>
        <el-table stripe :data="mobilizeBorrowDataState.BorrowRoom[itemData]">
          <el-table-column  prop="borrowDate" label="借用日期"></el-table-column>
          <el-table-column  prop="borrowTime" label="借用时间"></el-table-column>
          <el-table-column  prop="borrowReason" label="借用事由"></el-table-column>
        </el-table>
      </el-dialog>
      <span class="itemData">{{itemData}}</span>
      <span>调停课：{{ mobilizeBorrowDataState.MobilizeRoom[itemData].length  || 0 }}条</span>
      <span>借用教室：{{ mobilizeBorrowDataState.BorrowRoom[itemData].length  || 0 }}条</span> 
    </div>
  </div>
</template>

<script>
import mobilizeBorrowDataStore from 'store/mobilizeBorrowDataStore.js'

import { reactive, ref } from 'vue'

export default {
  props: ['itemData'],
  setup(props) {
    let dialogVisible = ref(false)
    // let temp = props.itemData
    let mobilizeBorrowDataState = reactive(mobilizeBorrowDataStore.state)

    return {
      dialogVisible,
      mobilizeBorrowDataState,
      // temp
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
  text-align:center;
  .content{
    border-radius: 4px;
    background-color: #267aec;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .itemData{
      font-size: 20px;
    }
  }
}
.el-dialog{
  height: 50vh;
}
</style>