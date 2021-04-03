<template>
  <header-vue></header-vue>
  <banner-vue></banner-vue>
  <button type="button" @click="test()" style="height:50px;width: 50px;">test</button>
  <content-vue></content-vue>

</template>

<script>
import axios from 'axios'
import HeaderVue from 'comps/header/index.vue'
import BannerVue from 'comps/banner/index.vue'
import ContentVue from 'comps/content/index.vue'

import dataFlagStore from 'store/dataFlagStore.js'
import roomDayDataStore from 'store/roomDayDataStore.js'

import { reactive, watch, computed, ref } from 'vue'

// 传递教室数据的api服务器网址
const apiClassRoomUrl = 'http://api.ppsuc.production.cicidoll.top:3001/v1/classRoomData' 
// 调停课数据的api接口
const mobilizeBorrowUrl = 'http://api.ppsuc.production.cicidoll.top:3001/v1/mobilizeBorrow' 

export default {
  setup() {
    const dataFlagState = reactive(dataFlagStore.state)
    const roomDayDataState = reactive(roomDayDataStore.state)

    const test = ()=>{
      console.log(roomDayDataState.roomData)
    }

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
          updateBuilding()
          updateDay()
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
    }

    const updateBuilding = ()=>{
      roomDayDataStore.setAction(
        'roomAllDayData',
        roomDayDataState.allRoomAllDayData[dataFlagState.building]
      )
    }

    const updateDay = ()=>{
      let start = Number(dataFlagState.day) - 1
      let result = roomDayDataState.roomData
      for (let list in roomDayDataState.roomAllDayData) {
        let res = []
        for (let i = start; i < roomDayDataState.roomAllDayData[list].length; i += 5) {
          if (roomDayDataState.roomAllDayData[list][i] !== 0) {
            res.push(roomDayDataState.roomAllDayData[list][i])
          }
        }
        
        result[list] = res
      }
      roomDayDataStore.setAction('roomData', result)
    }

    watch(
      [() => [dataFlagState.day, dataFlagState.building, dataFlagState.time]],
      () => {
        updateBuilding()
        updateDay()
    })

    return {
      dataFlagState,
      roomDayDataState,
      test,
      getClassRoomData,
      updateBuilding,
      updateDay
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