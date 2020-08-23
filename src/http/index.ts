import axios from "axios";
import qs from "qs";

// 创建新http

const http = axios.create({
    baseURL: "http://me.amrtang.com/vr_photo/api/web/v1/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
    },
});

//请求发送前数据处理
http.interceptors.request.use(
    (config) => {
        if (config.headers["Content-Type"] !== "multipart/form-data") {
            config.data = qs.stringify(config.data);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 请求发送后数据处理
http.interceptors.response.use((response) => {
    return response.data;
});

export default http;
