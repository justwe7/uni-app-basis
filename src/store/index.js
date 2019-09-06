import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate"; // 小程序频繁切换后台可能会杀清后台导致状态丢失，所以需要借用缓存保持永久状态

Vue.use(Vuex);

import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [
    createPersistedState({
      storage: {
        getItem: k => wx.getStorageSync(k),
        setItem: (k, v) => wx.setStorageSync(k, v),
        removeItem: e => e //执行空方法 永久缓存vuex数据
        // removeItem: key => wx.clearStorage()
      }
    })
  ]
});
