<template>
  <div class="item">
    <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>
    <el-dialog
      title="提示"
      v-model="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>这是一段信息</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    let dialogVisible = ref(false)

    return {
      dialogVisible
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
      }
  }
}
</script>

<style lang="less" scoped>
.item{
  background-color: pink;
  height: 0;
  width: calc(33% - 10px);
  padding-bottom: calc(33% - 10px);
  margin: 5px;
  border-radius: 4px;
  float: left;
}
</style>