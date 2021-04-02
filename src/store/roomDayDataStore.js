import { reactive } from 'vue'

const roomDayDataStore = reactive({
  debug: false,
  state: {
    allRoomAllDayData: {},
    roomAllDayData: {'am12': [], 'am34': [], 'pm12': [], 'pm34': []},
    roomData: {'am12': [], 'am34': [], 'pm12': [], 'pm34': []},
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
  }
})

export default roomDayDataStore