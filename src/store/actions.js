export default {
  UPDATE_LOGIN({ commit }, loginState) {//更新登陆状态
    setTimeout(() => {
      commit("UPDATE_LOGIN", loginState);
    }, 1000);
  }
};
