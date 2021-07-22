import http from "./http";

// 首页轮播图接口
// export const getBannerDataApi = (params) => http.get("/home/banner", params);

// 首页导师列表接口
export const getLeaderlistDataApi = (data) =>
  //request                        //params
  http.post("/index/leaderlist", data);
//const { data,code=='200' } = res

// 首页导师列表切片接口————【首页底部】用
export const getLeaderpartDataApi = (data) =>
  http.post("/index/leaderpart", data);

// 首页导师详情页接口
export const getLeaderbackDataApi = (data) =>
  http.post("/index/leaderback", data);

// 圆形人物列表接口————【导师详情-评价】用，【社区页】【社区详情-评论，转发，赞】用，【消息页】用
export const getPersonlistDataApi = (data) => http.post("/personlist", data);

// 消息方形人物通讯录列表接口
export const getFriendDataApi = (data) => http.post("/message/friend", data);

// 消息方形人物群聊列表接口
export const getGroupchatDataApi = (data) =>
  http.post("/message/groupchat", data);

// 消息方形人物通讯录好友详情接口
export const getFriendbackApi = (data) =>
  http.post("/message/friendback", data);

// 消息方形人物新朋友列表接口
export const getNewfriendDataApi = (data) =>
  http.post("/message/newfriend", data);
