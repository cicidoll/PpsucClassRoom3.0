<template>
  <div class="user">
    <a href="https://www.ppsuc.edu.cn" target="_blank">
      <img :src=LogoUrl alt="">    
    </a>    
  </div>

</template>

<script>
import LogoUrl from '../../assets/image/logo.png'

export default {
  data() {
    return {
      LogoUrl
    }
  }
}
</script>

<style lang="less" scoped>
.user{
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 5vw;
  a{
    height: 6vh;
    width: 6vh;
    border-radius: 3vh;
    overflow: hidden;
    margin: 0 auto;
    img{
      height: 100%;
      width: 100%;
    }
  }
}
</style>