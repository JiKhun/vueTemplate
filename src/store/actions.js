import Vue from 'vue'
import * as types from './types'
import axios from './../public/axios'
import { Message } from 'iview';
import 'iview/dist/styles/iview.css';
Vue.component('Message', Message);
// 或者可以这样写：
// import {INCREMENT, DECREMENT} from './types'
// 这个表示只是引出INCREMENT出来，上面那个带星号的是把所有都引过来。
export default {
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
      if(res.returnCode == 200){
        commit(types.GET_LIST, res.data)
      }
    })
  },
}
