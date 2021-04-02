import { reactive } from 'vue'

const dataFlagStore = reactive({
  debug: false,
  state: {
    day: '1',
    building: 'XiPei',
    time: 'am12'
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

export default dataFlagStore