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
  setup () {
    const dataName = dataFlagStore.state.building

    return{
      dataName
    }
  },
  methods: {
    handleClick(tab) {
      dataFlagStore.setAction('building', this.dataName)
    }
  }
}
</script>

<style lang="less">
.buildingTabs{
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