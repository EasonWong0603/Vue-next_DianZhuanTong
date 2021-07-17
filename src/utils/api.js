import http from "./http";

// 首页轮播图接口
// export const getBannerDataApi = (params) => http.get("/home/banner", params);

// 首页导师列表接口
export const getLeaderlistDataApi = (data) =>
  http.post("/index/leaderlist", data);

// 首页导师列表切片接口
export const getLeaderpartDataApi = (data) =>
  http.post("/index/leaderpart", data);

// 人物列表接口
export const getPersonlistDataApi = (data) => http.post("/personlist", data);

// 消息朋友列表接口
export const getFriendDataApi = (data) => http.post("/message/friend", data);

// 消息新朋友列表接口
export const getNewfriendDataApi = (data) =>
  http.post("/message/newfriend", data);
