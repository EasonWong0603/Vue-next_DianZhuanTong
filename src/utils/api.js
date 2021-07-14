import http from "./http";

// 首页轮播图接口
export const getBannerDataApi = (params) => http.get("/home/banner", params);

// 首页推荐接口
export const getRecommendDataApi = (data) => http.post("/home/recommend", data);
