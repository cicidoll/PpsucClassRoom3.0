<template>
  <el-carousel>
    <el-carousel-item v-for="ImgItem in ImgList" :key="ImgItem.id">
      <img :src='ImgItem.url' alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import bannerImg1 from '../../assets/image/banner/01.png'
import bannerImg2 from '../../assets/image/banner/02.png'
import bannerImg3 from '../../assets/image/banner/03.png'

export default {
  data () {
    return {
      ImgList: [
        {id: 0, url: bannerImg1},
        {id: 1, url: bannerImg2},
        {id: 2, url: bannerImg3}
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.el-carousel{
  height: 20vh;
  width: 100%;
  margin-top: 1vh;
  border-radius: 4px;
  .el-carousel__container{
    height: 100%;
  }
  img{
    display: inline-block;
    height: auto;
    max-width: 100%;
  }
}
</style>