<template>
  <div class="buildingTabs">
    <el-tabs v-model="dataName" @tab-click="handleClick">
      <el-tab-pane label="西配楼" name="XiPei"></el-tab-pane>
      <el-tab-pane label="中楼" name="zhongLou"></el-tab-pane>
      <el-tab-pane label="铸剑楼" name="zhuJian"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import dataFlagStore from '../../store/dataFlagStore.js'

export default {
  data () {
    return {
      dataName: dataFlagStore.state.building
    }
  }, 
  methods: {
    handleClick(tab) {
      // console.log(tab.props.name);
      // console.log('handleClick'+tab.props.name)
      // this.dataName = tab.props.name
      // this.sendMsgToParent()
      dataFlagStore.setAction('building', this.dataName)
    }
    // sendMsgToParent() { 
    //   //1.子组件通过子定义事件child-msg的方式将msg传给父组件
    //   console.log('sendMsgToParent'+this.dataName)
    //   this.$emit('child-msg', this.dataName)
    // }
  }
}
</script>

<style lang="less">
.buildingTabs{
  background-color: #fff;
  border-radius: 4px;
  .el-tabs.el-tabs--top{
    .el-tabs__header.is-top {
      margin-bottom: 0px !important;
      .el-tabs__nav-wrap.is-top{
        .el-tabs__nav-scroll{
          display: flex;
          justify-content: center;
          .el-tabs__nav.is-top{
            .el-tabs__item.is-top{
              font-size: 16px;
            }
            .el-tabs__active-bar.is-top{
              background-color: #2678ecd7;
              bottom: 2px;
            }
            .el-tabs__item.is-top.is-active{
              font-weight: bold;
            }
          }
        }
      }
    }
    .el-tabs__content{
      display: none;
    }
  }
}
</style>