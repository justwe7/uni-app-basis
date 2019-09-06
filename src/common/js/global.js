const { apiUrl } =
  process.env.NODE_ENV === "development"
    ? require("../../../profile/dev_env")
    : require("../../../profile/build.env");

// const baseUrl = require("../../../profile/dev_env").apiUrl;
console.log(apiUrl);

export const baseUrl = apiUrl;

export const $get = params => {
  return new Promise((resolve, reject) => {
    let domain = params.baseUrl || baseUrl;
    domain.endsWith("/") && (domain = domain.substr(0, domain.length - 1));
    wx.request({
      url: `${domain}${params.url}`,
      header: {
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
