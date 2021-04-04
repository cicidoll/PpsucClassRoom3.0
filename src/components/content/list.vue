<template>
  <div class="list">
    {{ roomDayDataState.timeData }}
    <!-- {{timeData}} -->
    <!-- <button @click="test">timeData</button> -->
    <button @click="test1">roomDayDataStore</button>
    <item-vue></item-vue>
    <item-vue></item-vue>
    <item-vue></item-vue>
  </div>
</template>

<script>
import roomDayDataStore from 'store/roomDayDataStore.js'
import dataFlagStore from 'store/dataFlagStore.js'
import itemVue from './list/item.vue'
import { reactive, ref, watch } from 'vue'

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
  },
  methods: {
    // test() {
    //   console.log(this.timeData)
    // },
    test1() {
      console.log(roomDayDataStore.state.timeData)
    }
  },
  mounted () {
    // this.timeData = this.roomDayDataState.timeData
  }
}
</script>

<style lang="less" scoped>
.list{
  height: calc(100% - 40px);
  width: calc(100vw - 10px - 40px);
}
</style>