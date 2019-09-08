import store from "@/store";
const { apiUrl } =
  process.env.NODE_ENV === "development"
    ? require("../../../profile/dev_env")
    : require("../../../profile/build.env");

// const baseUrl = require("../../../profile/dev_env").apiUrl;
// console.log(store.state);

export const baseUrl = apiUrl;

export const $get = params => {
  return new Promise((resolve, reject) => {
    let domain = params.baseUrl || baseUrl;
    domain.endsWith("/") && (domain = domain.substr(0, domain.length - 1));
    wx.request({
      url: `${domain}${params.url}`,
      header: {
        Authorization: store.state.Authorization,
        ...params.header
      },
      data: params.data,
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail(err) {
        reject(err);
      }
    });
  });
};

export const $post = params => {
  return new Promise((resolve, reject) => {
    let domain = params.baseUrl || baseUrl;
    domain.endsWith("/") && (domain = domain.substr(0, domain.length - 1));
    wx.request({
      url: `${domain}${params.url}`,
      header: {
        Authorization: store.state.Authorization,
        // "Authorization": 'cbb0386362c193d685500b972a003b20',
        ...params.header
        // "content-type": "application/x-www-form-urlencoded",
      },
      data: params.data,
      method: "POST",
      success(res) {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      },
      fail(err) {
        reject(err);
      }
    });
  });
};

/* 异形屏兼容 */
var screenConfig = {};
// try {
const res = uni.getSystemInfoSync();
const { windowWidth, windowHeight, platform, statusBarHeight, model } = res;
screenConfig.pixelRate = windowWidth / 750;
screenConfig.platform = platform;
screenConfig.statusBarHeight = statusBarHeight;
if (platform.toLowerCase() == "devtools") {
  screenConfig.capsuleHeight = 44;
}
if (platform.toLowerCase() == "android") {
  screenConfig.capsuleHeight = 48;
}
screenConfig.headHeight =
  (screenConfig.capsuleHeight + screenConfig.statusBarHeight) /
  screenConfig.pixelRate; //包括状态及标题内容整个paddingtop hack
if (statusBarHeight >= 44) {
  screenConfig.isHighHead = true; //刘海
}
if (windowHeight > 750) screenConfig.isAllScreen = true; // 屏幕比例 >16:9
screenConfig.systemHeight = windowHeight;

export const iPX = model.indexOf("iPhone X") > -1;
export var screenConfig = screenConfig;
// } catch (e) {}
