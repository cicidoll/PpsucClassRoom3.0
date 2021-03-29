<template>
  <header-vue></header-vue>
  <banner-vue></banner-vue>
</template>

<script>
import HeaderVue from './components/header/index.vue'
import BannerVue from './components/banner/index.vue'

export default {
  components: {
    'header-vue': HeaderVue,
    'banner-vue': BannerVue
  }
}
</script>

<style lang="less" scoped>
 
</style>