// 引入axios
import axios from "axios";
// 错误采用轻提示
import { Toast } from "vant";

// 使用自定义配置新建一个实例
const instance = axios.create({
  // 接口前缀
  baseURL: "http://www.pudge.wang:4000",
  // 超时事件
  timeout: 10000,
});

// 添加请求拦截器
// instance.interceptors.request.use(
//   (config) => {
//     // 在发送请求之前做些什么
//     return config;
//   },
//   (error) => {
//     // 对请求错误做些什么
//     return Promise.reject(error);
//   }
// );

// 添加响应拦截器
// instance.interceptors.response.use(
//   () => {
//     // 2xx 范围内的状态码都会触发该函数。
//     // 此处的response与下面的http.get.then中的response相同
//     // 对响应数据做点什么
//     // 判断数据获取状态，接口状态码为0则成功
//     // if (response.data.status === "0") {
//     //   console.log(response.data);
//     //   return response.data.result;
//     // }
//   },
//   (error) => {
//     // 超出 2xx 范围的状态码都会触发该函数。
//     // 对响应错误做点什么
//     return Promise.reject(error);
//   }
// );

const http = {
  get(url, params) {
    return new Promise((reslove) => {
      return instance
        .get(url, { params })
        .then((response) => {
          reslove(response);
        })
        .catch((error) => {
          // 轻提示提示错误信息
          Toast(error.message);
        });
    });
  },
  post(url, data) {
    return new Promise((reslove) => {
      return instance
        .post(url, data)
        .then((response) => {
          reslove(response);
        })
        .catch((error) => {
          // 轻提示提示错误信息
          Toast(error.message);
        });
    });
  },
};

export default http;
