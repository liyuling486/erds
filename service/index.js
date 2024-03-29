const TIME_OUT = 30000
const BASE_URL = "http://xmgldev.qzdata.com.cn/prod-api"


class HRequest {
  request(url, method, data) {
    return new Promise((resolve, reject) => {
      uni.request({
        url: BASE_URL + url,
        method: method || "GET",
        timeout: TIME_OUT,
        data: data,
        success(res) {
          resolve(res.data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }

  get(url, params) {
    return this.request(url, "GET", params)
  }

  post(url, data) {
    return this.request(url, "POST", params)
  }
}
export default new HRequest()