<template>
  <div class="list">
    <!-- <el-container>
      <el-main> -->
        <item-vue v-for="(item, index) in roomDayDataState.timeData"
          :key="index"
          :itemData="item">
        </item-vue>
      <!-- </el-main>
    </el-container> -->

  </div>
</template>

<script>
import roomDayDataStore from 'store/roomDayDataStore.js'
import dataFlagStore from 'store/dataFlagStore.js'
import itemVue from './list/item.vue'
import { reactive } from 'vue'

export default {
  setup () {
    const dataFlagState = reactive(dataFlagStore.state)
    const roomDayDataState = reactive(roomDayDataStore.state)

    // watch(
    //   [() => [dataFlagState.day, dataFlagState.building, dataFlagState.time, roomDayDataState.timeData]],
    //   () => {
    //     console.log('watch')
    //     timeData = roomDayDataState.timeData
    // })

    return {
      dataFlagState,
      roomDayDataState
    }
  },
  components: {
    'item-vue': itemVue
  }
}
</script>

<style lang="less" scoped>
.list{
  width: 100%;
  display: flex;
  flex-flow: wrap;
  // flex: 1 1 auto;
  justify-content: space-between;
  align-items: space-between;
  // height: calc(100% - 40px);
  // width: calc(100vw - 10px - 40px);
  // overflow:hidden;
  // overflow-y: scroll;
}
</style>