import { reactive } from 'vue'

const roomDayDataStore = reactive({
  debug: false,
  state: {
    allRoomAllDayData: {},
    roomAllDayData: {'am12': [], 'am34': [], 'pm12': [], 'pm34': []},
    roomData: {'am12': [], 'am34': [], 'pm12': [], 'pm34': []},
    timeData: []
  },
  setAction (key, newValue) {
    if (this.debug) {
      console.log(`set ${key} Action triggered with ${newValue}`)
    }
    this.state[key] = newValue
  },
  clearAction (key) {
    if (this.debug) {
      console.log(`clear ${key} Action triggered`)
    }
    this.state[key] = ''
  },
  updateDay(day) {
    let start = Number(day) - 1
    let result = this.state.roomData
    for (let list in this.state.roomAllDayData) {
      let res = []
      for (let i = start; i < this.state.roomAllDayData[list].length; i += 5) {
        if (this.state.roomAllDayData[list][i] !== 0) {
          res.push(this.state.roomAllDayData[list][i])
        }
      }
      result[list] = res
    }
    this.setAction('roomData', result)
  },
  updateBuilding (building) {
    this.setAction(
      'roomAllDayData',
      this.state.allRoomAllDayData[building]
    )
  },
  timeComputed (list1, list2) {
    let res = []
    let data1 = list1.slice(0)
    let data2 = list2.slice(0)
    while (data1.length !== 0 && data2.length !== 0) {
      if (data1[0] === data2[0]) {
        res.push(data1[0])
        data1.shift()
        data2.shift()
      } else if (data1[0] < data2[0]) {
        data1.shift()
      } else if (data1[0] > data2[0]) {
        data2.shift()
      }
    }
    return res
  },
  listComputed (label) {
    if (!label) {
      return false
    }
    if (label == 'am12'|| 'am34' || 'pm12' || 'pm34') {
      this.setAction('timeData', this.state.roomData[label])
    }
    let res
    if (label == 'am14') {
      res = this.timeComputed(this.state.roomData.am12, this.state.roomData.am34)
      this.setAction('timeData', res)
    }
    if (label == 'pm14') {
      res = this.timeComputed(this.state.roomData.pm12, this.state.roomData.pm34)
      this.setAction('timeData', res)
    }
    // console.log(this.state.timeData)
  }
})

export default roomDayDataStore