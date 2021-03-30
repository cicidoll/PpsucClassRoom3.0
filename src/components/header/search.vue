<template>
  <div class="search">
    <img :src=searchUrl alt="">
    <span>请输入要搜索的内容</span>
  </div>
</template>

<script>
import searchUrl from '../../assets/icon/043search.png'

export default {
  data () {
    return {
      searchUrl
    }
  }
}
</script>

<style lang="less" scoped>
.search{
  width: 100%;
  height: 4vh;
  border-bottom-left-radius: 3vh;
  border-bottom-right-radius: 3vh;
  border-top-left-radius: 3vh;
  border-top-right-radius: 3vh;
  background-color: #f3fbff;
  display: flex;
  align-items: center;
  justify-content: start;
  img{
    height: 2vh;
    width: 2vh;
    margin-left: 2vh;
  }
  span{
    font-size: 12px;
    color: #616466;
    padding-left: 5vw;
  }
}
</style>