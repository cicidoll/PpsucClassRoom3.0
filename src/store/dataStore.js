const dataStore = {
  debug: false,
  state: {
    day: 'first',
    building: 'first',
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
}

export default dataStore