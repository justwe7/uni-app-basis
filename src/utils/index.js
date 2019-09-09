
/**
 * 上传图片封装
 * @author huaxi.li
 * @date 2019-09-08
 * @export
 * @param {*} wxfilelist chooseImg的图片信息
 * @returns
 */
export async function uploadWxImg(wxfilelist) {
  return Promise.all(
    wxfilelist.map((tempFiles, index) => {
      wx.showLoading({ title: "图片上传中", mask: true });
      return new Promise(function(resolve, reject) {
        wx.uploadFile({
          url: baseUrl + "/upload/uploadImg",
          filePath: tempFiles,
          name: "file",
          success: function(res) {
            if (res.statusCode === 200) {
              if (JSON.parse(res.data).result === 200) {
                resolve({
                  url: JSON.parse(res.data).data.url
                });
                return false;
              } else {
                return reject(JSON.parse(res.data).msg);
              }
            }
            reject(new Error("failed to upload file"));
          },
          fail: function(err) {
            reject(new Error("failed to upload file"));
          }
        });
      });
    })
  )
    .then(res => {
      wx.hideLoading();
      return res.map(el => el.url);
    })
    .catch(err => {
      wx.hideLoading();
      wx.showToast({ title: err || '上传失败：请重新上传', icon: "none" });
      return [];
    });
}
