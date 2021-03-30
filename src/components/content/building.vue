<template>
  <el-tabs v-model="dataName" @tab-click="handleClick">
    <el-tab-pane label="西配楼" name="first">西配楼</el-tab-pane>
    <el-tab-pane label="中楼" name="second">中楼</el-tab-pane>
    <el-tab-pane label="铸剑楼" name="third">铸剑楼</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  props: ['activeName'],
  data () {
    return {
      dataName: this.activeName
    }
  }, 
  methods: {
    handleClick(tab) {
      // console.log(tab.props.name);
      console.log('handleClick'+tab.props.name)
      this.dataName = tab.props.name
      this.sendMsgToParent()
    },
    sendMsgToParent() { 
      //1.子组件通过子定义事件child-msg的方式将msg传给父组件
      console.log('sendMsgToParent'+this.dataName)
      this.$emit('child-msg', this.dataName)
    }
  }
};
</script>