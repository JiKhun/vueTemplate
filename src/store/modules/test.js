import * as types from '../types'
import axios from '../../public/axios'
import { Message } from 'iview';
import 'iview/dist/styles/iview.css';
const state = {
  count: 10,
  list: []
}
const actions = {
  increment: ({
    commit
  }) => {
    commit(types.INCREMENT)
  },
  decrement: ({
    commit
  }) => {
    commit(types.DECREMENT)
  },
  getlist: ({
    commit
  }) => {
    axios.post('forum/list').then(res => {
      Message.info(res.msg)
      if (res.returnCode == 200) {
        commit(types.GET_LIST, res.data)
      }
    })
  },
}
const mutations = {
  [types.INCREMENT](state) {
    state.count++
  },
  [types.DECREMENT](state) {
    state.count--
  },
  [types.GET_LIST](state, res) {
    state.list = res.list
  },
  [types.SET_INDEX](state, index) {
    state.list[index].id++;
  },
}
const getters = {
  list: state => { //通过方法访问
    return state.list
  },
  count: state => { //通过方法访问
    return state.count
  },
}

export default {
  state,
  actions,
  mutations,
  getters,
}
