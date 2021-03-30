<template>
  <tabs></tabs>
  <carousel></carousel>
</template>

<script>
import Carousel from './carousel.vue'
import Tabs from './tabs.vue'

export default {
  components:{
    'carousel': Carousel,
    'tabs': Tabs
  }
}
</script>

<style lang="less" scoped>

</style>