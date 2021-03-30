<template>
  <div class="index">
    <building :activeName="activeName" @child-msg="getChildMsg"></building>
    <!-- <body></body> -->
    <button @click="test" type="button" style="height:50px;width:50px;"></button>
  </div>
</template>

<script>
import Building from './building.vue'
import Body from './body.vue'

export default {
  data() {
    return {
      activeName: 'first'
    };
  },
  components: {
    'building': Building,
    'body': Body
  },
  methods: {
    test() {
      console.log(this.activeName)
    },
    getChildMsg(msg) {
      console.log('getChildMsg'+msg)
      this.activeName = msg
    }
  }
}
</script>

<style lang="less" scoped>
.index{
  height: 90vh;
  width: 100%;
  background-color: pink;
}
</style>