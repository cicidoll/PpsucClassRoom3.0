<template>
  <header-vue></header-vue>
  <banner-vue></banner-vue>
  <content-vue></content-vue>
</template>

<script>
import HeaderVue from './components/header/index.vue'
import BannerVue from './components/banner/index.vue'
import ContentVue from './components/content/index.vue'

export default {
  components: {
    'header-vue': HeaderVue,
    'banner-vue': BannerVue,
    'content-vue': ContentVue
  }
}
</script>

<style lang="less" scoped>
 
</style>