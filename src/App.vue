<template>
  <header-vue></header-vue>
  <banner-vue></banner-vue>
  <content-vue></content-vue>

</template>

<script>
import axios from 'axios'
import HeaderVue from 'comps/header/index.vue'
import BannerVue from 'comps/banner/index.vue'
import ContentVue from 'comps/content/index.vue'

import dataFlagStore from 'store/dataFlagStore.js'
import roomDayDataStore from 'store/roomDayDataStore.js'

import { reactive, watch } from 'vue'

// 传递教室数据的api服务器网址
const apiClassRoomUrl = 'http://api.ppsuc.production.cicidoll.top:3001/v1/classRoomData' 
// 调停课数据的api接口
const mobilizeBorrowUrl = 'http://api.ppsuc.production.cicidoll.top:3001/v1/mobilizeBorrow' 

export default {
  setup() {
    const dataFlagState = reactive(dataFlagStore.state)
    const roomDayDataState = reactive(roomDayDataStore.state)

    const getClassRoomData = ()=>{
      // 在axios中使用function () {}的写法，会导致this指向问题出错。
      // 解决方法：使用ES6箭头函数
      axios.get(apiClassRoomUrl)
        .then((response) => {
          // handle success
          // console.log(response['data'])
          roomDayDataStore.setAction('allRoomAllDayData', response['data'])
        })
        .then(() => {
          // 使用初始化定义的建筑物变量与日期变量
          updateRoomData()
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
    }

    const updateRoomData = () => {
      let day = dataFlagState.day
      let building = dataFlagState.building
      let time = dataFlagState.time

      roomDayDataStore.updateBuilding(building)
      roomDayDataStore.updateDay(day)
      roomDayDataStore.listComputed(time)
    }

    watch(
      [() => [dataFlagState.day, dataFlagState.building, dataFlagState.time]],
      () => {
        updateRoomData ()
    })

    return {
      dataFlagState,
      roomDayDataState,
      getClassRoomData,
      updateRoomData
    }
  },
  components: {
    'header-vue': HeaderVue,
    'banner-vue': BannerVue,
    'content-vue': ContentVue
  },
  created () {
    this.getClassRoomData()
  }
}
</script>