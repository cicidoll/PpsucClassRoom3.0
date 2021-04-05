记载踩坑Log
===

1、elementui-plus无法兼容vue3.0.5 需要手动限制vue版本  
在package.json中添加
  "dependencies": {
    "vue": "^3.0.3"
  }  

2、git push error 10054  
解决方法：  
在命令行中执行这个  
git config --global http.sslBackend "openssl"  

3、但是如果div的宽度是百分比，继承的是父元素的宽度的百分比时，高度该如何设置为等于宽呢？

div {
  width: 20%;
  height: 0; // 设置高为0，让padding撑起高
  padding-bottom: 20%; /* 让div的高等于宽 */
  border-radius: 50%;
}
此时将padding-top/padding-bottom设置为百分比时，是基于父元素宽度，正好和width相等；在使用border-radius=50%，就实现了自适应的圆形。  

4、在setup中，导入store：
'''
  setup () {
    const dataFlagState = reactive(dataFlagStore.state)
    const roomDayDataState = reactive(roomDayDataStore.state)

    return {
      dataFlagState,
      roomDayDataState
    }
'''  
视图中{{roomDayDataState.timeData}},能够获取到数据  
  
但同样是在setup中，导入store：
'''
  setup () {
    const dataFlagState = reactive(dataFlagStore.state)
    const roomDayDataState = reactive(roomDayDataStore.state)
    let timeData = reactive(roomDayDataStore.state.timeData)

    return {
      dataFlagState,
      roomDayDataState,
      timeData
    }
'''  
视图中{{timeData}},却获取不到数据  
尝试过以下方法，均失败：  

'let timeData = ref(roomDayDataStore.state.timeData)'
'let timeData = ref(roomDayDataState.timeData)'
'''
// 增加watch，使其实时更新
watch(
  [() => [dataFlagState.day, dataFlagState.building, dataFlagState.time, roomDayDataState.timeData]],
  () => {
    // 确实watch到了，但是数据没更新
    console.log('watch')
    timeData = roomDayDataState.timeData
})
'''  

【注：可能是错误使用了const或者是let的缘故，但是暂时没有精力去复现】