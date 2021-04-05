<template>

  <div class="list">
    <item-vue v-for="(item, index) in roomDayDataState.timeData"
      :key="index"
      :itemData="String(item)">
    </item-vue>
  </div>

</template>

<script>
import roomDayDataStore from 'store/roomDayDataStore.js'
import itemVue from './list/item.vue'
import { reactive } from 'vue'

export default {
  setup () {
    let roomDayDataState = reactive(roomDayDataStore.state)

    return {
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