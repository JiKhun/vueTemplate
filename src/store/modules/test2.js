import * as types from '../types'

const state = {
  count2: 10,
}
const actions = {
  testg: ({
    commit
  }) => {
    commit(types.TESTG)
  },
}
const mutations = {
  [types.TESTG](state) {
    state.count2 =  state.count2+2
  },
}
const getters = {
  count2: state => { //通过方法访问
    return state.count2
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
