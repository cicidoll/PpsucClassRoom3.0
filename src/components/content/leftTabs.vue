<template>
  <div class="boxTabs">
    <el-tabs tab-position="left" v-model="date" @tab-click="handleClick">
      <el-tab-pane label="上午1、2节" name="am12"></el-tab-pane>
      <el-tab-pane label="上午3、4节" name="am34"></el-tab-pane>
      <el-tab-pane label="上午1—4节" name="am14"></el-tab-pane>
      <el-tab-pane label="下午1、2节" name="pm12"></el-tab-pane>
      <el-tab-pane label="下午3、4节" name="pm34"></el-tab-pane>
      <el-tab-pane label="下午1—4节" name="pm14"></el-tab-pane>
    </el-tabs>  
  </div>
</template>

<script>
import dataFlagStore from '../../store/dataFlagStore.js'

export default {
  setup() {
    const tabPosition = 'left'
    const date = dataFlagStore.state.time

    return {
      tabPosition,
      date
    }
  },
  methods: {
    handleClick(tab) {
      dataFlagStore.setAction('time', this.date)
    }
  }
}
</script>

<style lang="less">
.boxTabs{
  background-color: #fff;
  border-radius: 4px;
  .el-tabs.el-tabs--left{
    .el-tabs__header.is-left {

      .el-tabs__nav-wrap.is-left{
        .el-tabs__nav-scroll{
          display: flex;
          justify-content: center;
          .el-tabs__nav.is-left{
            .el-tabs__item.is-left{
              font-size: 8px;
            }
            .el-tabs__active-bar.is-left{
              background-color: #2678ecd7;
              bottom: 2px;
            }
            .el-tabs__item.is-left.is-active{
              font-weight: bold;
            }
          }
        }
      }
    }
    .el-tabs__content{
      height: 0;
      width: 0;
      display: none;
    }
  }
}
</style>