<template>
  <div class="item"></div>
</template>

<script>
export default {
  setup() {
    
  },
}
</script>

<style lang="less" scoped>
.item{
  background-color: pink;
  height: 0;
  width: calc(33% - 10px);
  padding-bottom: calc(33% - 10px);
  margin: 5px;
  border-radius: 4px;
  float: left;
}
</style>