<template>
  <div class="index">
    <building  @click="changeShow"></building>
    <el-container @click="changeShow">
      <el-aside width="113px">
        <left-tabs></left-tabs>
      </el-aside>
        <el-main>
          <transition name="el-fade-in-linear">
            <list  v-show="show" class="transition-box"></list>
          </transition>  
        </el-main>
    </el-container>  
  </div>
</template>

<script>
import Building from './building.vue'
// import Box from './box.vue'

import leftTabs from './leftTabs.vue'
import List from './list.vue'

import { reactive, ref } from 'vue'

export default {
  setup() {
    let show = ref(true)

    return {
      show
    }
  },
  components: {
    'building': Building,
    // 'box': Box
    'left-tabs': leftTabs,
    'list': List
  },
  methods:{
    changeShow() {
      this.show = !this.show

      let timeOut = setTimeout(()=>{
        this.show = !this.show
        clearTimeout(timeOut)
      },350)
    }
  }
}
</script>

<style lang="less" scoped>
.index{
  background-color: #fff;
  min-height: 80vh;
  margin: 5px;
  margin-bottom: 5px;
  border-radius: 4px;
  overflow: scroll;
}
.el-main{
  width: calc(100vw - 123px);
}
</style>