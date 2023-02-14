import axios from "axios";
import { ACCESS_TOKEN, DOMAIN, TOKEN_CYBERSOFT } from "../constants/index";
import { history } from "../index";

export const http = axios.create({
  baseURL: DOMAIN,
  timeout: 30000,
});

http.interceptors.request.use(
  (config) => {
    //Cấu hình tất cả header gửi đi đều có bearer token (token authorization đăng nhập)
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`,
      TokenCybersoft: TOKEN_CYBERSOFT,
      "Content-Type": "application/json",
      charset: "utf-8",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type",
    };

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

//Cấu hình cho tất cả kết quả trả về (cấu hình cho response)
http.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  (error) => {
    //Hàm cấu hình cho tất cả lỗi nhận về
    if (error.response?.status === 400 || error.response?.status === 404) {
      //Chuyển hướng trang về trang chủ
      history.push("/");
    }

    if (error.response?.status === 401 || error.response?.status === 403) {
      history.push("/login");
    }

    return Promise.reject(error);
  }
);
