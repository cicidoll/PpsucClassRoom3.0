import { reactive } from 'vue'

const mobilizeBorrowDataStore = reactive({
  debug: false,
  state: {
    allBuildingMobilizeBorrowRoom: {},
    buildingMobilizeRoom: 
    { 'zhuJian': { '101': [], '102': [], '104': [], '105': [], '106': [], '108': [], '110': [], '111': [], '112': [], '201': [], '202': [], '204': [], '205': [], '206': [], '207': [], '208': [], '210': [], '301': [], '302': [], '303': [], '304': [], '305': [], '306': [], '307': [], '308': [], '309': [], '401': [], '402': [], '403': [], '404': [], '405': [], '406': [], '407': [], '408': [], '409': [], '410': [], '411': [], '501': [], '502': [], '503': [], '504': [], '505': [], '506': [], '507': [], '508': [], '509': [], '510': [], '511': [] },
      'zhongLou': {'103': [], '104': [], '107': [], '110': [], '112': [], '113': [], '203': [], '204': [], '205': [], '206': [], '207': [], '208': [], '210': [], '211': [], '303': [], '304': [], '305': [], '306': [], '307': [], '308': [], '407': [], '408': [], '503': [], '504': [], '505': [], '506': [], '507': [], '510': [], '603': [], '607': [], '703': [], '704': [], '705': [], '707': [], '708': []},
      'XiPei': { '102': [], '103': [], '104': [], '105': [], '106': [], '109': [], '202': [], '203': [], '204': [], '205': [], '206': [], '209': [], '302': [], '303': [], '304': [], '305': [], '306': [], '309': [], '402': [], '403': [], '404': [], '405': [], '406': [], '409': [], '502': [], '503': [], '504': [], '505': [], '506': [], '509': [] } },
    MobilizeRoom: 
    { '101': [], '102': [], '103': [], '104': [], '105': [], '106': [], '107': [], '108': [], '109': [], '110': [], '111': [], '112': [], '113': [], '201': [], '202': [], '203': [], '204': [], '205': [], '206': [], '207': [], '208': [], '209': [], '210': [], '211': [], '301': [], '302': [], '303': [], '304': [], '305': [], '306': [], '307': [], '308': [], '309': [], '401': [], '402': [], '403': [], '404': [], '405': [], '406': [], '407': [], '408': [], '409': [], '410': [], '411': [], '501': [], '502': [], '503': [], '504': [], '505': [], '506': [], '507': [], '508': [], '509': [], '510': [], '511': [] },
    buildingBorrowRoom: 
      { 'zhuJian': { '101': [], '102': [], '104': [], '105': [], '106': [], '108': [], '110': [], '111': [], '112': [], '201': [], '202': [], '204': [], '205': [], '206': [], '207': [], '208': [], '210': [], '301': [], '302': [], '303': [], '304': [], '305': [], '306': [], '307': [], '308': [], '309': [], '401': [], '402': [], '403': [], '404': [], '405': [], '406': [], '407': [], '408': [], '409': [], '410': [], '411': [], '501': [], '502': [], '503': [], '504': [], '505': [], '506': [], '507': [], '508': [], '509': [], '510': [], '511': [] },
        'zhongLou': {'103': [], '104': [], '107': [], '110': [], '112': [], '113': [], '203': [], '204': [], '205': [], '206': [], '207': [], '208': [], '210': [], '211': [], '303': [], '304': [], '305': [], '306': [], '307': [], '308': [], '407': [], '408': [], '503': [], '504': [], '505': [], '506': [], '507': [], '510': [], '603': [], '607': [], '703': [], '704': [], '705': [], '707': [], '708': []},
        'XiPei': { '102': [], '103': [], '104': [], '105': [], '106': [], '109': [], '202': [], '203': [], '204': [], '205': [], '206': [], '209': [], '302': [], '303': [], '304': [], '305': [], '306': [], '309': [], '402': [], '403': [], '404': [], '405': [], '406': [], '409': [], '502': [], '503': [], '504': [], '505': [], '506': [], '509': [] }
      },
    BorrowRoom: 
    { '101': [], '102': [], '103': [], '104': [], '105': [], '106': [], '107': [], '108': [], '109': [], '110': [], '111': [], '112': [], '113': [], '201': [], '202': [], '203': [], '204': [], '205': [], '206': [], '207': [], '208': [], '209': [], '210': [], '211': [], '301': [], '302': [], '303': [], '304': [], '305': [], '306': [], '307': [], '308': [], '309': [], '401': [], '402': [], '403': [], '404': [], '405': [], '406': [], '407': [], '408': [], '409': [], '410': [], '411': [], '501': [], '502': [], '503': [], '504': [], '505': [], '506': [], '507': [], '508': [], '509': [], '510': [], '511': [] }
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
  updateBuilding (building) {
    this.setAction(
      'MobilizeRoom',
      this.state.buildingMobilizeRoom[building]
    )
    this.setAction(
      'BorrowRoom',
      this.state.buildingBorrowRoom[building]
    )
  }
})

export default mobilizeBorrowDataStore