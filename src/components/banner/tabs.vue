<template>
  <div class="bannerTabs">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="周一" name="1"></el-tab-pane>
      <el-tab-pane label="周二" name="2"></el-tab-pane>
      <el-tab-pane label="周三" name="3"></el-tab-pane>
      <el-tab-pane label="周四" name="4"></el-tab-pane>
      <el-tab-pane label="周五" name="5"></el-tab-pane>
    </el-tabs>
  </div>

</template>
<script>
import dataFlagStore from '../../store/dataFlagStore.js'

export default {
  setup () {
    const activeName = dataFlagStore.state.day

    return{
      activeName
    }
  },
  methods: {
    handleClick(tab, event) {
      dataFlagStore.setAction('day', this.activeName)
      // console.log(dataFlagStore.state.day)
    }
  }
};
</script>

<style lang="less">
.bannerTabs{
  background-color: #2678ecd7;

  .el-tabs.el-tabs--top{

    .el-tabs__header.is-top {
      margin-bottom: 0px !important;

      .el-tabs__nav-wrap.is-top{

        .el-tabs__nav-scroll{
          display: flex;
          justify-content: center;

          .el-tabs__nav.is-top{

            .el-tabs__active-bar.is-top{
              background-color: white;
              bottom: 2px;
            }
            .el-tabs__item.is-top.is-active{
              font-weight: bold;
            }
            .el-tabs__item.is-top{
              color: white;
              height: 30px;
              line-height: 30px;
              padding-bottom: 10px;
            }
          }
        }
      }
    }
  }
}
</style>