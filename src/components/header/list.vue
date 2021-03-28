<template>
  <div class="list">
    <img :src=listUrl alt="">
  </div>
</template>

<script>
import listUrl from '../../assets/icon/323Menulist.png'

export default {
  data () {
    return {
      listUrl
    }
  }
}
</script>

<style lang="less" scoped>
.list{
  height: 3vh;
  width: 3vh;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-right: 3vw;
  img{
    height: 100%;
    width: 100%;
  }
}
</style>