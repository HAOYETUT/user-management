import axios from "axios";
//loading
import { showLoading, hideLoading } from "../utils/loading";
 
let baseURL = "";
if (process.env.NODE_ENV === "production") {
  //根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境
  if (process.env.VUE_APP_TITLE === "production") {
    //production 生产环境
    baseURL = "xxxxxxxxxxxxxxxxxxx";
  } else {
    //test 测试环境
    baseURL = "xxxxxxxxxxxxxxxxxxx";
  }
} else {
  //development 开发环境
  baseURL = "xxxxxxxxxxxxxxxxxxxx";
}
axios.defaults.baseURL = baseURL;
axios.defaults.timeout = 20000;
// 携带 cookie，对目前的项目没有什么作用，因为是 token 鉴权
axios.defaults.withCredentials = true;
// 请求头，headers 信息
// @ts-ignore
axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest";
// @ts-ignore
axios.defaults.headers["Access-token"] = "";
// 默认 post 请求，使用 application/json 形式
axios.defaults.headers.post["Content-Type"] = "application/json";
 
// 请求拦截器
axios.interceptors.request.use(
  (config: any) => {
    // 请求拦截进来调⽤显⽰loading效果
 
    showLoading();
    // @ts-ignore
    config.headers["Access-token"] = window.sessionStorage.getItem("token") == null ? "" : window.sessionStorage.getItem("token");
    return config;
  },
  (error: any) => {
    console.log(error);
    return Promise.reject();
  }
);
// 响应拦截器
axios.interceptors.response.use(
  (response: { status: number; data: { code: number; }; }) => {
// 响应拦截进来隐藏loading效果，此处采⽤延时处理是合并loading请求效果，避免多次请求loading关闭⼜开启
    setTimeout(() => {
      hideLoading();
    }, 200);
    if (response.status === 200) {
      if (response.data.code == 4001) {
        window.location.href = "/login";
        window.sessionStorage.clear();
      }
      return response.data;
    } else {
      Promise.reject();
    }
  },
  (error: any) => {
// 响应拦截进来隐藏loading效果，此处采⽤延时处理是合并loading请求效果，避免多次请求loading关闭⼜开启
 
    setTimeout(() => {
      hideLoading();
    }, 200);
    console.log(error);
    return Promise.reject();
  }
);
 
export default axios;