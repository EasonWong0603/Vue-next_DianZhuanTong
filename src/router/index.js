import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  // 一级重定向
  {
    path: "/",
    redirect: "/home",
  },
  // 主页
  {
    path: "/home",
    component: () => import("../views/Home.vue"),
    children: [
      // 二级重定向
      {
        path: "/home",
        redirect: "/home/index",
      },
      // 首页
      {
        path: "/home/index",
        component: () => import("../views/home/Index.vue"),
      },
      // 社区
      {
        path: "/home/community",
        component: () => import("../views/home/Community.vue"),
      },
      // 消息
      {
        path: "/home/message",
        component: () => import("../views/home/Message.vue"),
      },
      // 我的
      {
        path: "/home/mine",
        component: () => import("../views/home/Mine.vue"),
      },
    ],
  },
  // 首页-积分详情页
  {
    path: "/pointsdetail",
    component: () => import("../views/index/PointsDetail.vue"),
  },
  // 首页-加入点赚通页
  {
    path: "/join",
    component: () => import("../views/index/Join.vue"),
  },
  // 首页-项目详情页
  {
    path: "/itemdetail",
    component: () => import("../views/index/ItemDetail.vue"),
    children: [
      // 二级重定向
      {
        path: "/itemdetail",
        redirect: "/itemdetail/overview",
      },
      // 首页-项目详情页-项目信息
      {
        path: "/itemdetail/overview",
        component: () => import("../views/index/itemdetail/Overview.vue"),
      },
      // 首页-项目详情页-安全保障
      {
        path: "/itemdetail/security",
        component: () => import("../views/index/itemdetail/Security.vue"),
      },
      // 首页-项目详情页-指导名师
      {
        path: "/itemdetail/itemleader",
        component: () => import("../views/index/itemdetail/Itemleader.vue"),
      },
    ],
  },
  // 首页-导师列表页
  {
    path: "/leaderlist",
    component: () => import("../views/index/Leaderlist.vue"),
  },
  // 首页-导师详情页
  {
    path: "/leaderdetail",
    component: () => import("../views/index/Leaderdetail.vue"),
    children: [
      // 首页-导师介绍页
      {
        path: "/leaderdetail/introduction",
        component: () => import("../views/index/leaderdetail/Introduction.vue"),
      },
      // 首页-导师详情页-评价
      {
        path: "/leaderdetail/evaluation",
        component: () => import("../views/index/leaderdetail/Evaluation.vue"),
      },
      // 首页-导师详情页-动态
      {
        path: "/leaderdetail/news",
        component: () => import("../views/index/leaderdetail/News.vue"),
      },
    ],
  },

  // 社区-社区详情页
  {
    path: "/communitydetail",
    component: () => import("../views/community/Communitydetail.vue"),
    children: [
      // 二级重定向
      {
        path: "/communitydetail",
        redirect: "/communitydetail/comment",
      },
      // 社区-社区详情页-评论
      {
        path: "/communitydetail/comment",
        component: () =>
          import("../views/community/communitydetail/Comment.vue"),
      },
      // 社区-社区详情页-转发
      {
        path: "/communitydetail/forward",
        component: () =>
          import("../views/community/communitydetail/Forward.vue"),
      },
      // 社区-社区详情页-赞
      {
        path: "/communitydetail/like",
        component: () => import("../views/community/communitydetail/Like.vue"),
      },
    ],
  },
  // 登录
  {
    path: "/legister",
    component: () => import("../views/Legister.vue"),
  },
  // 404页面，将匹配所有内容并将其放在 `$route.params.pathMatch` 下
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/404NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
