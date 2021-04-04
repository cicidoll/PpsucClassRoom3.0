<template>
  <div class="box">
    <left-tabs></left-tabs>
    <list :testData="listData"></list>
    <button @click="test">testtest</button>
  </div>
</template>

<script>
import leftTabs from './leftTabs.vue'
import List from './list.vue'

import dataFlagStore from 'store/dataFlagStore.js'
import roomDayDataStore from 'store/roomDayDataStore.js'

import { reactive } from 'vue'

export default {
  setup () {
    const dataFlagState = reactive(dataFlagStore.state)
    const roomDayDataState = reactive(roomDayDataStore.state)
    let listData = reactive(roomDayDataState.timeData)

    return {
      dataFlagState,
      roomDayDataState,
      listData
    }
  },
  components: {
    'left-tabs': leftTabs,
    'list': List
  },
  methods: {
    test() {
      console.log(this.listData)
      // console.log(this.dataFlagState)
    },

  },
  // mounted () {
  //   this.updateRoomData()
  // }
}
</script>

<style lang="less" scoped>
.box{
  display: flex;
  height: calc(100% - 40px);
}
</style>