<template>
  <div class="box">
    <left-tabs></left-tabs>
    <list :data="listComputed(dataFlagState.time)"></list>
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
    let listData = reactive([])

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
    timeComputed (list1, list2) {
      let res = []
      let data1 = list1.slice(0)
      let data2 = list2.slice(0)
      while (data1.length !== 0 && data2.length !== 0) {
        if (data1[0] === data2[0]) {
          res.push(data1[0])
          data1.shift()
          data2.shift()
        } else if (data1[0] < data2[0]) {
          data1.shift()
        } else if (data1[0] > data2[0]) {
          data2.shift()
        }
      }
      return res
    },
    test() {
      console.log(this.listData)
    },
    listComputed: function (label) {
      if (!label && label.length === 0) {
        return false
      }
      if (label == 'am12' && label == 'pm12') {
        this.listData = roomDayDataState.roomData[label]
      }
      if (label == 'am34') {
        this.listData = this.timeComputed(this.roomDayDataState.roomData['am12'], this.roomDayDataState.roomData['am34'])
      }
      if (label == 'pm34') {
        this.listData = this.timeComputed(this.roomDayDataState.roomData['pm12'], this.roomDayDataState.roomData['pm34'])
      }
    }
  },
  watch: {
    dataFlagState() {
      console.log(`watch`)
      this.listComputed(this.dataFlagState.time)
    }
  }
}
</script>

<style lang="less" scoped>
.box{
  display: flex;
  height: calc(100% - 40px);
}
</style>