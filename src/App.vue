<template>
  <header-vue></header-vue>
  <banner-vue></banner-vue>
  <button type="button" @click="test()" style="height:50px;width: 50px;">test</button>
  <content-vue></content-vue>
  
</template>

<script>
import axios from 'axios'

import HeaderVue from './components/header/index.vue'
import BannerVue from './components/banner/index.vue'
import ContentVue from './components/content/index.vue'

import dataFlagStore from './store/dataFlagStore.js'
import roomDayDataStore from './store/roomDayDataStore.js'

import { watch } from 'vue'

// 传递教室数据的api服务器网址
const apiClassRoomUrl = 'http://api.ppsuc.production.cicidoll.top:3001/v1/classRoomData' 
// 调停课数据的api接口
const mobilizeBorrowUrl = 'http://api.ppsuc.production.cicidoll.top:3001/v1/mobilizeBorrow' 



export default {
  setup () {
    watch(()=>{
        return x.value
      },(state,preState)=>{

      })
  },
  data() {
    return {
      dataFlagState: dataFlagStore.state,
      roomDayDataState: roomDayDataStore.state
    }
  },
  components: {
    'header-vue': HeaderVue,
    'banner-vue': BannerVue,
    'content-vue': ContentVue
  },
  methods: {
    test() {
      console.log(this.roomDayDataState)
    },
    getClassRoomData () {
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
          this.initBuilding()
          this.initDay()
        })
        .catch((error) => {
          // handle error
          console.log(error)
        })
    },
    initBuilding () {
      roomDayDataStore.setAction('roomAllDayData', this.roomDayDataState.allRoomAllDayData[this.dataFlagState.building])
    },
    initDay () {
      roomDayDataStore.setAction('roomData', this.roomDayDataState.roomAllDayData[this.dataFlagState.day])
    }
  },
  mounted () {
    this.getClassRoomData()
  }
}
</script>