export default {
  UPDATE_LOGIN: (state, v) => {
    state.isLogin = v;
  },
  LOGIN: (state, v) => {//登陆
    state.Authorization = v;
  },
};
