<template>
  <div class="index">
    <el-carousel :interval="6000" arrow="never">
      <el-carousel-item v-for="ImgItem in ImgList" :key="ImgItem.id">
        <img :src='ImgItem.url' alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
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
.index{
  padding: 5px;
  .el-carousel{
    height: 20vh;
    width: 100%;
    margin-top: 0.5vh;
    border-radius: 4px;
    .el-carousel__container{
      .el-carousel__item{
        height: 20vh;
        display: flex;
        justify-content: center;
      }
    }
  }

}
</style>

<style lang="less" scoped>
/deep/.el-carousel__container{
  height: 20vh;
}
</style>