// 可以用这个方法来代替下面的导入所有
// import {INCREMENT, DECREMENT} from './types'
import * as types from './types'

export default {
  [types.INCREMENT] (state) {
    state.count++
  },
  [types.DECREMENT] (state) {
    state.count--
  },
  [types.GET_LIST] (state,res) {
    state.list = res.list
  },
  [types.SET_INDEX] (state,index) {
    state.list[index].id++;
  },
}
