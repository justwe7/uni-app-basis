import { $post } from "@/common/js/global";
import { resolve } from "q";

export default {
  async LOGIN({ commit }) {
    //登录  调用登录接口  返回token 更新至vuex中，接口携带
    return new Promise(resolve => {
      setTimeout(e => {
        resolve();
        commit(
          "LOGIN",
          "Y7FtcPwzUfum5rU/5wH1GAqEvTgBAdplXXHTWYIJyYWnVufh2nQKF+YxlV2/WahB"
        );
      }, 2000);
    });

    /* $post({
      url: "lg"
    }).then(res => {
      commit("UPDATE_LOGIN", res.Authorization);
    }) */
  }
};
