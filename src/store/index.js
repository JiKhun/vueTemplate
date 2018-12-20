// 配置入口
import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)


//方案一 modules模块划分

import test from './modules/test'
import test2 from './modules/test2'
export default  new Vuex.Store({
  modules:{
    test,
    test2
  },
  // plugins: [createPersistedState()]
})

//方案二 属性划分

// import state from './state'
// import actions from './actions'
// import * as getters from './getters'
// import mutations from './mutations'

// export default new Vuex.Store({
//   state,
//   actions,
//   getters,
//   mutations
// })
