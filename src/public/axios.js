import axios from 'axios'
import qs from 'qs'

// const Basse_Port = "/api"; //测试域名
// axios.defaults.baseURL = Basse_Port; //axios的域名前缀
// axios.defaults.headers.common['Platform'] = 2;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


//POST传参序列化
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, (err) => {
  return Promise.reject(err);
});

//返回状态判断
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
});

function checkStatus(res) {
  // 如果http状态码正常，则直接返回数据
  if (res && (res.status === 200 || res.status === 304 || res.status === 400)) {
    if (res.data.returnCode == '0014') { //登录状态失效(其他设备已登陆)
      if (sessionStorage.getItem('hqzy_token')) {
        window.location.href = G_Port + "#/login"
      }
      sessionStorage.clear();
    }
    return res.data
  }
  // 异常状态下，把错误信息返回去
  // console.log(res.data)
  return {
    status: -404,
    msg: '网络异常'
  }
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    alert(res.msg)
  }
  if (res.data && (!res.data.success)) {
    // alert(res.data.error_msg)
  }
  console.log(res.data)
  return res.data
}

export default ({
  post(url, data) { //  post
    return axios({
      method: 'post',
      url,
      data,
      timeout: 30000,
      headers: {
        // 'Authorization': sessionStorage.getItem('hqzy_token') ? sessionStorage.getItem('hqzy_token') : ''
      }
    }).then(
      (res) => {
        return checkStatus(res)
      }
    ).catch(
      (res) => {
        return checkCode(res)
      }
    )
  },
  get(url, params) { // get
    return axios({
      method: 'get',
      url,
      params, // get 请求时带的参数
      timeout: 30000,
      headers: {
        // 'Authorization': sessionStorage.getItem('hqzy_token') ? sessionStorage.getItem('hqzy_token') : ''
      }
    }).then(
      (res) => {
        return checkStatus(res)
      }
    ).catch(
      (res) => {
        return checkCode(res)
      }
    )
  }
})
